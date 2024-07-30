import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { loadsPostingConfig } from './DatLoadsPostingConfig';
import { RateLookupService } from '../../services/rate-lookup.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-view-dat-loads',
  templateUrl: './view-dat-loads.component.html',
  styleUrls: ['./view-dat-loads.component.scss'],
})
export class ViewDatLoadsComponent implements OnInit, OnChanges {
  @Input() datload_board_response: any;
  @Input() datload_query_url: string;
  @Output() onRefresh = new EventEmitter<boolean>();

  loadsPostingTableConfig: any;
  loadsPostingData: any;
  loadBoardUrl: string;
  totalLoadPostsData: any[] = [];
  totalAvailbalerecords: number;
  showNoRecords: boolean = false;
  matchingAssetInfo: any;
  hasLoading: boolean = false;
  showInfiniteLoad:boolean=true
  sortBy='origin'
  order=1;
  tableRefreshing : boolean = false;

  constructor(private service: RateLookupService) {}

  ngOnInit(): void {
    this.loadboardRecords();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['datload_board_response'].previousValue) {
      return;
    }

    this.totalLoadPostsData = [];
    this.datload_board_response = changes['datload_board_response'].currentValue;
    this.loadboardRecords()
    this.hasLoading = false;
  }

  
  refreshTable() {
    this.hasLoading = true;
    this.onRefresh.emit(true);  
  }

  loadboardRecords() {
    this.loadsPostingTableConfig = loadsPostingConfig;
    if (this.datload_board_response.data) {
      this.loadBoardUrl =
        this.datload_board_response.data.metadata.linkToNextPage;
      this.totalAvailbalerecords =
        this.datload_board_response.data?.matchCounts?.normal;
      this.getDataOfLoadPostings();
    } else {
      this.showNoRecords = true;
    }
  }

  // check for available records and format the data by using loadash
  getDataOfLoadPostings(
    type = 'infiniteLoad',
    sortBy = this.sortBy,
    order = this.order
  ) {
  
    if (this.datload_board_response.data.matchCounts.normal == 0) {
      // if load board data length is zero show no records found message
      this.showNoRecords = true;
    }
    else {
      const loads_Data = _.map(
        this.datload_board_response.data.matches,
        (req) => {
          this.matchingAssetInfo = _.get(req, 'matchingAssetInfo');
          return {
            origin:
              _.get(this.matchingAssetInfo, 'origin.city', '-') +
              ',' +
              _.get(this.matchingAssetInfo, 'origin.stateProv', '-'),
            destination:
              _.get(this.matchingAssetInfo, 'destination.place.city', '-') +
              ',' +
              _.get(this.matchingAssetInfo, 'destination.place.stateProv', '-'),
            equipmentType: this.service.findEquipmentType(
              _.get(this.matchingAssetInfo, 'equipmentType')
            ),
            availability: this.service.formatDate(
              _.get(req, 'availability.earliestWhen', '-')
                .toString()
                .split('T')[0]
            ),
            rate: this.service.findRatePerMile(
              _.get(req, 'loadBoardRateInfo.nonBookable.rateUsd', '-'),
              _.get(req, 'tripLength.miles', '-')
            ),
            tripLength: _.get(req, 'tripLength.miles', '-'),
            companyName: _.get(req, 'posterInfo.companyName', '-'),
            originDeadhead: _.get(req, 'originDeadheadMiles.miles', '-'),
            destinationDeadhead: _.get(
              req,
              'destinationDeadheadMiles.miles',
              '-'
            ),
            age: this.service.findCurrentAge(_.get(req, 'servicedWhen')),
          };
        }
      );
      
      if (type == 'infiniteLoad') {
        this.totalLoadPostsData.push(...loads_Data);
        this.totalLoadPostsData.sort(this.compareBy(sortBy, order));
      } else {
        
                loads_Data.sort(this.compareBy(sortBy, order));
        this.totalLoadPostsData.splice(
          0,
          this.totalLoadPostsData.length,
          ...loads_Data
        );
      }
    }
  }

  getLoadBoardPosts() {
    this.service
      .getDatLoadPostings(this.loadBoardUrl)
      .subscribe((res: any) => {
        this.datload_board_response = res;
        // update the url with response url for next api call
        this.loadBoardUrl = res.data.metadata.linkToNextPage;
        // updates records count after api call
        this.getDataOfLoadPostings();
      });
  }

  onInfiniteLoading() {
    if (this.totalLoadPostsData.length !== this.totalAvailbalerecords) {
      // if records are available
      this.showInfiniteLoad=true 
      this.service
      .getDatLoadPostings(this.loadBoardUrl)
      .subscribe((res: any) => {
        this.datload_board_response = res;
        // update the url with response url for next api call
        this.loadBoardUrl = res.data.metadata.linkToNextPage;
        // updates records count after api call
        this.getDataOfLoadPostings();
      });
    }else{
      this.showInfiniteLoad=false 
    }
  }

  // for table sorting

  sortTable(event) {
    this.showInfiniteLoad = true
    let colName = event.field;
    this.sortBy=colName
    let order = event.order;
    this.order=order
    let orderBy;
    if (order == 1) {
      orderBy = `asc(${colName})`;
    } else {
      orderBy = `desc(${colName})`;
    }
    this.hasLoading = true;
    return this.service
      .getDatLoadPostings(this.datload_query_url, orderBy,'sort')
      .subscribe((res) => {
        this.datload_board_response = res;
        this.getDataOfLoadPostings('sort');
        this.loadBoardUrl=res['data'].metadata.linkToNextPage
        this.hasLoading = false;
      });
  }

  compareBy = (propertyName, order) => {
   
    return (data1, data2) => {
      let value1 = data1[propertyName];
      let  value2 = data2[propertyName];
      let result = null;
      
      if (propertyName == 'age') {
        value1 = this.convertToMinutes(value1);
        value2 = this.convertToMinutes(value2);
      }
      if(propertyName=='rate'){
        value1=this.convertToNum(value1)
        value2=this.convertToNum(value2)
      }
     
      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
  
      return order * result;
    };
  };
  

  convertToMinutes(time) {
    const unit = time.slice(-1);
    const value = parseInt(time.slice(0, -1));
    switch (unit) {
      case 'm':
        return value;
      case 'h':
        return value * 60;
      case 'd':
        return value * 60 * 24;
      default:
        return null; // Unsupported unit
    }
  }
  convertToNum(num) {
    // Remove non-numeric characters and convert to number
    const numericValue = parseFloat(num.replace(/[^0-9.-]+/g, ''));
    return isNaN(numericValue) ? null : numericValue;
  }
  
  
  

}
