import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HotelBookingRoutingModule } from './hotel-booking-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { HotelAccomodation } from './screens/hotel-accomodation/hotel-accomodation.component';
import { SeacrhAccommodationComponent } from './components/seacrh-accommodation/seacrh-accommodation.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
HotelDetailsComponent


@NgModule({
  declarations: [
 

    HotelAccomodation,
    SeacrhAccommodationComponent,
    HotelCardComponent,
    HotelDetailsComponent
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HotelBookingRoutingModule
  ]
})
export class HotelBookingModule { }
