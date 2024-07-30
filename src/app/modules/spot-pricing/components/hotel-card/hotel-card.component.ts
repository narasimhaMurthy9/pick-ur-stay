import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { inputValidations } from 'src/app/core/common/utils';

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
@Input() selectedLocation:any;
@Input() sendCheckIn
ngOnChanges(changes: SimpleChanges): void{
  console.log(changes,'on changes')
  this.locationName= changes['selectedLocation'] ? changes['selectedLocation'].currentValue.name : this.locationName
  this.checkIn=changes['sendCheckIn'] ? changes['sendCheckIn']?.currentValue[0] : this.checkIn
  this.checkOut=changes['sendCheckIn'] ? changes['sendCheckIn']?.currentValue[1] : this.checkOut
  this.showHotels()
}
constructor(private fb:FormBuilder,private toaster :ToastrService,){
  this.addRoomsForm = this.fb.group({
    NumOfRooms: [null],
  });
}

ngOnInit(): void {
  // console.log(this.sendCheckIn[0], this.sendCheckIn[1],typeof(this.sendCheckIn))
  // this.locationName= this.selectedLocation.name
  
}


//input validation
inputValidationsErrors = (searchForm: FormGroup, type: string) => {
  return inputValidations(searchForm, type);
};

showHotels(){
let selectedLocationInfo=(Object.keys(this.locations));
 selectedLocationInfo.forEach((item)=>{
  if(item == this.locationName){
     console.log(this.locations[item],'i am selected')
    this.showHotelData= this.locations[item]
  }
 })
}
 locations = {
  Visakhapatnam: [
        { 
           id:1,
           hotelName: "Novotel",
           hotelImg: "https://lh3.googleusercontent.com/p/AF1QipMr85hmhGvFSY-luXnrOfjOxFldEaZ-ByR5ZJL7=s1360-w1360-h1020", 
           status: "Available",
           about:"Experience the comfort of our newly built, luxurious 2 BHK air-conditioned homestay situated in a prime location. Our expansive apartments boast generous livingmore",
           price:1270,

         },
        { 
          id:2,
          hotelName: "Radisson", 
          hotelImg: "https://media.radissonhotels.net/image/radisson-blu-resort-vishakhapatnam/exterior/16256-126787-f72717211_4k.jpg?impolicy=GalleryLightboxFullscreen", 
          status: "Not-Available",
          about:"Experience a delightful stay at our newly constructed, luxurious 1 BHK air-conditioned homestay situated in a prime location. Our expansive apartments feature.",
           price:2300, 
        },
        { 
          id:3,
          hotelName: "Dolphin", hotelImg: "https://pix8.agoda.net/hotelImages/111387/-1/84e462df50fb9145345522266ed9abc4.jpg?ca=0&ce=1&s=1024x", status: "Available" ,
          about:"Experience the comfort of our newly built, luxurious 2 BHK air-conditioned homestay situated in a prime location. Our expansive apartments boast generous living.",
           price:2500,
        },
        { 
          id:4,
          hotelName: "Daspalla", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipPi-dEGrdOs1L2hqZoKWEvAR693UvPld4TVkAJl=s1360-w1360-h1020", status: "Available",
          about:"Stay with us at our brand new, luxurious 3 BHK, air-conditioned homestay in a prime location. Our spacious apartments offer a large living and dining area, as well as comfortable bedrooms. We are conveniently located near restaurants, cafes, and a supermarket and are easily accessible from the airport and major highways. Come and enjoy a fun-filled stay with us.",
           price:1200,
         }
        
    ],
    Vizianagaram: [
      { 
        id:5,
        hotelName: "SVN Lake palace",
         hotelImg: "https://lh3.googleusercontent.com/p/AF1QipPm_Hdj0np778QtPP_Ql0pxHUD96szQyhXOnOzP=s1360-w1360-h1020",
          status: "Available",
          about:"Experience the comfort of our newly built, luxurious 2 BHK air-conditioned homestay situated in a prime location. Our expansive apartments boast generous livingmore",
          price:880, },
      {
        id:6,
        hotelName: "Vytla", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipODvnGGVOC8foGZjuaVHBFrPC5lnQ_k9wI3U7B4=s1360-w1360-h1020", status: "Not-Available",
        about:"Experience a delightful stay at our newly constructed, luxurious 1 BHK air-conditioned homestay situated in a prime location. Our expansive apartments feature.",
           price:2700,
       },
      { 
        id:7,
        hotelName: "Woodland", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipPm_Hdj0np778QtPP_Ql0pxHUD96szQyhXOnOzP=s1360-w1360-h1020", status: "Available",
        about:"Stay with us at our brand new, luxurious 3 BHK, air-conditioned homestay in a prime location. Our spacious apartments offer a large living and dining area, as well as comfortable bedrooms. We are conveniently located near restaurants, cafes, and a supermarket and are easily accessible from the airport and major highways. Come and enjoy a fun-filled stay with us.",
           price:1980,
       },
    ],
    Srikakulam: [
      { 
        id:8,
        hotelName: "Novotel", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipMr85hmhGvFSY-luXnrOfjOxFldEaZ-ByR5ZJL7=s1360-w1360-h1020", status: "Available",
        about:"Experience the comfort of our newly built, luxurious 2 BHK air-conditioned homestay situated in a prime location. Our expansive apartments boast generous livingmore",
           price:1570,
       },
      { 
        id:9,
        hotelName: "Radisson", hotelImg: "https://media.radissonhotels.net/image/radisson-blu-resort-vishakhapatnam/exterior/16256-126787-f72717211_4k.jpg?impolicy=GalleryLightboxFullscreen", status: "Not-Available",
        about:"Experience a delightful stay at our newly constructed, luxurious 1 BHK air-conditioned homestay situated in a prime location. Our expansive apartments feature.",
           price:2600,
       },
      { 
        id:10,
        hotelName: "Woodland", hotelImg: "https://lh3.googleusercontent.com/p/AF1QipPm_Hdj0np778QtPP_Ql0pxHUD96szQyhXOnOzP=s1360-w1360-h1020", status: "Available",
        about:"Stay with us at our brand new, luxurious 3 BHK, air-conditioned homestay in a prime location. Our spacious apartments offer a large living and dining area, as well as comfortable bedrooms. We are conveniently located near restaurants, cafes, and a supermarket and are easily accessible from the airport and major highways. Come and enjoy a fun-filled stay with us.",
           price:1890,
       },
    ]
};


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

bookNow(){
this.toaster.info("we send your details, Admin will contact you soon")
}
}
