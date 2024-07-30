import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { RateLookupService } from '../../services/rate-lookup.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-green-screen-rates',
  templateUrl: './green-screen-rates.component.html',
  styleUrls: ['./green-screen-rates.component.scss'],
})
export class GreenScreenRatesComponent implements OnInit {
  @Input() GreenSreenAndDatRates: any;
  @Input() searchedLocation: any;

  locations: any[];
  netWorkRatePath: any;
  predictedRatePath: string;
  mileage: any;
  fuelRate: number;
  greenScreenTargetBuyRate: any;
  greenScreenConfidenceLevel: any;
  netWorkTargetBuyRate: any;
  netWorkConfidenceLevel: number;
  dat_average_rate: number;
  dat_rate_per_mile: number;
  greenScreenMileage: any;
  showLoadPositngTable: boolean = false;
  showLoadPositngBtn: boolean = true;
  ratesInfo: any;
  loadingbtn: boolean = false;
  datload_query_url: string;
  datload_board_response: any;
  intial_query_url: string;
  loadingDatBtn: boolean = false;
  datRatePath: string;
  datError: string;
  gsRateError: string;
  predictedRateError: string;
  netTargetRate: number;
  predictTargetRate: number;
  reports:number | string;
  companies:number | string;
  rateInfo:any
  timeFrame:any;
  rateType:any;
  datDetailedInfo:any;
  originEscalationType:string;
  destinationEscalationType:string;

  constructor(
    private rateLookupService: RateLookupService,
    private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    this.getGreenScreenAndDatData();
  }

  getGreenScreenAndDatData() {
    // base paths
    this.netWorkRatePath = _.get(
      this.GreenSreenAndDatRates,
      'data.greenScreen.networkRate'
    );
    this.predictedRatePath = _.get(
      this.GreenSreenAndDatRates,
      'data.greenScreen.predictedRate'
    );
    this.datRatePath = _.get(
      this.GreenSreenAndDatRates,
      'data.dat.rates.rateResponses[0].response.rate'
    );
    this.rateInfo = _.get(
      this.GreenSreenAndDatRates,
      'data.dat.rates.rateResponses[0].response.escalation'
    );
    
    this.mileage = _.get(this.predictedRatePath, 'rates.distance');
    this.netTargetRate = _.get(this.netWorkRatePath, 'rates.targetBuyRate');
    this.fuelRate = _.get(this.netWorkRatePath, 'rates.fuelRate');
    this.predictTargetRate = _.get(
      this.predictedRatePath,
      'rates.targetBuyRate'
    );
    // more detailed destructuring for individual values
    this.netWorkTargetBuyRate = this.rateLookupService.mulitply(
      this.netTargetRate,
      this.mileage
    );
    this.netWorkConfidenceLevel = _.get(
      this.netWorkRatePath,
      'rates.confidenceLevel',
      ' - '
    );
    this.greenScreenTargetBuyRate = this.rateLookupService.mulitply(
      this.predictTargetRate,
      this.mileage
    );
    this.greenScreenConfidenceLevel = _.get(
      this.predictedRatePath,
      'rates.confidenceLevel',
      ' - '
    );
    this.greenScreenMileage = this.rateLookupService.getRounded(this.mileage); //todo :replace n/a to html

    // get the values of rateUsd and averageFuelSurchargePerTripUsd from dat response rate and add it for final lane rate
    this.dat_average_rate = this.rateLookupService.add(
      _.get(this.datRatePath, 'perTrip.rateUsd'),
      _.get(this.datRatePath, 'averageFuelSurchargePerTripUsd')
    );
    this.dat_rate_per_mile =
      // get the values of rateUsd and averageFuelSurchargePerTripUsd from dat response rate and add it for final lane rate
      this.rateLookupService.ratePerMileDat(
        _.get(this.datRatePath, 'perMile.rateUsd'),
        _.get(this.datRatePath, 'averageFuelSurchargePerMileUsd')
      );
      this.reports=_.get(this.datRatePath,'reports','-')
      this.companies=_.get(this.datRatePath,'companies','-')
      this.timeFrame=_.get(this.rateInfo,'timeframe','-')
      this.originEscalationType=_.get(this.rateInfo,'origin.type','-')
      this.destinationEscalationType=_.get(this.rateInfo,'destination.type','-')

    this.datload_query_url = this.checkForLoadpostingUrl(
      _.get(this.GreenSreenAndDatRates, 'data.loadBoardInfo.loadboardURL')
    );
    this.datDetailedInfo = this.generateToolTipHTML();
  }

  //  when click on view dat loads button , do api call and show table component by handling boolean as true
  showLoadPostings() {
    if (this.loadingDatBtn) return;
    this.loadingDatBtn = true;
    let orderBy = 'asc(origin)';
    this.rateLookupService
      .getDatLoadPostings(this.datload_query_url, orderBy)
      .subscribe((loadPostingData) => {
        this.loadingDatBtn = false;
        this.datload_board_response = loadPostingData;
        this.showLoadPositngTable = true;
        this.showLoadPositngBtn = false;
        this.cdr.detectChanges();
      });
  }


  generateToolTipHTML(): string {
    return`<div mt-1><span>Reports: ${this.reports}</span>
        <span class='reportData'>Companies : ${this.companies}</span>
        <span class='reportData'>Time Frame: ${this.timeFrame}</span>
        <span class='reportData'>Origin Geography: ${this.originEscalationType}</span>
        <span class='reportData'>Destination Geography: ${this.destinationEscalationType}</span></div>`;
  }

  // check for is load baord url is present or not

  checkForLoadpostingUrl(loadurl) {
    if (loadurl) {
      return loadurl;
    }
    return null;
  }

  refreshDatloadResponse() {
    this.showLoadPostings();
  }

  // based on rate type , show error message
  getError(rateType: string) {
    let predictedRateError = _.get(this.predictedRatePath, 'error.message');
    let gsRateError = _.get(this.netWorkRatePath, 'error.message');
    let datError = _.get(
      this.GreenSreenAndDatRates,
      'data.dat.error.errors[0].message'
    );

    //  change the temporaryError with respected Errors
    // ie.,datError,predictedRateError,gsRateError respectively  after backend issue fixed
    let temporaryError =
      'No records found with the desired origin or destination.';

    if (rateType == 'dat') {
      return (this.datError = temporaryError);
    } else if (rateType == 'predicted') {
      return (this.predictedRateError = temporaryError);
    } else if (rateType == 'network') {
      return (this.gsRateError = temporaryError);
    } else {
      return ' - ';
    }
  }

  goToPage(event: boolean) {
    if (event) {
      this.rateLookupService.navigateToGreenscreens(this.searchedLocation);
    }
  }
}
