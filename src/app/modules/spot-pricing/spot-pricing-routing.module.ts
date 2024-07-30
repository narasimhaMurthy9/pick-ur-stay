import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateSearchComponent } from './components/rate-search/rate-search.component';
import { SpotPricingComponent } from './screens/spot-pricing/spot-pricing.component';
import { AuthGuardGuard } from '../auth/services/auth-guard.guard';
import { SeacrhAccommodationComponent } from './components/seacrh-accommodation/seacrh-accommodation.component';

const routes: Routes = [
  {
    path: '',
    component:SpotPricingComponent ,
    children:[
      {
        path:'',redirectTo:'search-accomdation',pathMatch:'full'
      },
    
      {
        path:'rate-lookup',
        component:RateSearchComponent
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
export class SpotPricingRoutingModule { }
