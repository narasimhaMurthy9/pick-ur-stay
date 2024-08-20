import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelAccomodation } from './screens/hotel-accomodation/hotel-accomodation.component';
import { AuthGuardGuard } from '../auth/services/auth-guard.guard';
import { SeacrhAccommodationComponent } from './components/seacrh-accommodation/seacrh-accommodation.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';

const routes: Routes = [
  {
    path: '',
    component: HotelAccomodation, 
    children: [
      {
        path: '',
        component: SeacrhAccommodationComponent,      
      },
      {
        path: ':id',
        component: HotelDetailsComponent,
        pathMatch: 'full'
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelBookingRoutingModule { }
