import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelAccomodation } from './screens/hotel-accomodation/hotel-accomodation.component';
import { AuthGuardGuard } from '../auth/services/auth-guard.guard';
import { SeacrhAccommodationComponent } from './components/seacrh-accommodation/seacrh-accommodation.component';

const routes: Routes = [
  {
    path: '',
    component:HotelAccomodation ,
    children:[
      {
        path:'',redirectTo:'search-accomdation',pathMatch:'full'
      },
      {
        path:'search-accomdation',
        component: SeacrhAccommodationComponent
      }
     
    ]
  },




  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelBookingRoutingModule { }
