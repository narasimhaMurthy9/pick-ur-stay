import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { inputValidations } from 'src/app/core/common/utils';
import { HotelbookService } from '../../services/hotelbook.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit, OnChanges{
  locationName: string = "Visakapatnam"
  showHotelData:any
  addRoomsForm:FormGroup;
  selectedPrice:number
  selectedHotel:string
  showPrice:number
  showPriceWithTax:number
  checkIn:any
  checkOut:any
  locations:any;
@Input() selectedLocation:any;
@Input() sendCheckIn
ngOnChanges(changes: SimpleChanges): void{
  console.log(changes,'on changes')
  this.locationName= changes['selectedLocation'] ? changes['selectedLocation'].currentValue.name : this.locationName
  this.checkIn=changes['sendCheckIn'] ? changes['sendCheckIn']?.currentValue[0] : this.checkIn
  this.checkOut=changes['sendCheckIn'] ? changes['sendCheckIn']?.currentValue[1] : this.checkOut
  this.showHotels()
  console.log(this.selectedLocation,'selectedLocation')
}
constructor(private fb:FormBuilder,private toaster :ToastrService, private router:Router,private hotelService:HotelbookService){
  this.addRoomsForm = this.fb.group({
    NumOfRooms: [null],
  });
  console.log(this.hotelService.locations)
  this.locations=this.hotelService.locations
}

ngOnInit(): void {
}


//input validation
inputValidationsErrors = (searchForm: FormGroup, type: string) => {
  return inputValidations(searchForm, type);
};

showHotels(){
let selectedLocationInfo=(Object.keys(this.locations));
console.log(selectedLocationInfo,"selectedLocationInfo")
 selectedLocationInfo.forEach((item)=>{
  if(item == this.locationName){
     console.log(this.locations[item],'i am selected')
    this.showHotelData= this.locations[item]
  }
 })
}
 


AddRoom(name,id){
  
  let selectedLoc = this.locations[name]
  console.log(selectedLoc)
  selectedLoc.forEach((e)=>{
    console.log(e)
    if(e.id == id){
      this.selectedPrice = e.price
      this.selectedHotel=e.hotelName
    };
  
    
  })

  
  this.showPrice = this.selectedPrice * +this.addRoomsForm.controls['NumOfRooms'].value
  this.showPriceWithTax = this.showPrice + 234
}


bookNow(id: number) {
  localStorage.setItem("hotelLocation",this.selectedLocation.name)
  localStorage.setItem("checkIn",this.checkIn)
  localStorage.setItem("checkOut",this.checkOut)
  this.router.navigate(['/pickurstay', id]);
}
}
