import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { AuthGuardGuard } from '../auth/services/auth-guard.guard';


const routes: Routes = [
  {
    path: '',
    component:DashboardComponent ,
    children:[
      {
        path:'',redirectTo:'spotPricing',pathMatch:'full'
      },
      {
        path:'spotPricing',
        // canActivate: [AuthGuardGuard],
        loadChildren:()=>
           import('../spot-pricing/spot-pricing.module').then((m)=>m.SpotPricingModule)
      },
     
    ]
  },
  
      
    ]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
})
export class DashboardRoutingModule { }
