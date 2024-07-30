import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpotPricingRoutingModule } from './spot-pricing-routing.module';
import { RateSearchComponent } from './components/rate-search/rate-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GreenScreenRatesComponent } from './components/green-screen-rates/green-screen-rates.component';
import { ViewDatLoadsComponent } from './components/view-dat-loads/view-dat-loads.component';
import { SpotPricingComponent } from './screens/spot-pricing/spot-pricing.component';
import { SeacrhAccommodationComponent } from './components/seacrh-accommodation/seacrh-accommodation.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';



@NgModule({
  declarations: [
    RateSearchComponent,
    GreenScreenRatesComponent,
    ViewDatLoadsComponent,
    SpotPricingComponent,
    SeacrhAccommodationComponent,
    HotelCardComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SpotPricingRoutingModule
  ]
})
export class SpotPricingModule { }
