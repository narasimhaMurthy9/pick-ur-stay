import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-row-expandable-table',
  templateUrl: './row-expandable-table.component.html',
  styleUrls: ['./row-expandable-table.component.scss']
})
export class RowExpandableTableComponent implements OnInit {
  @Input() data: any = [];
  @Input() config: any = {};
  @Input() expandable: boolean = false;
  @Output() interSectionHappened = new EventEmitter<boolean>();


  currentPage = 1;
  perPage = 10;
  users : any[] = [];


  columns: object[] = [];
  records: object[] = [];

  ngOnInit(): void {
    this.columns = this.config.columns; 
    this.records = this.data;
  }

  onSearch(){
    let params = {
      page: this.currentPage,
      results: this.perPage,
    }
    // this.dat.fetchPhotos(params).subscribe(
    //   (response: any)=>{
    //     response.results.forEach((result: any[])=>{

    //       this.users.push(result)
          
    //     })
 //  
    //     this.currentPage++;
    //   }
    // )
  }
  constructor(
  ){}

  onIntersection(){
  
    
  }
}
