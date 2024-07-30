import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SpotPricingModule } from '../spot-pricing/spot-pricing.module';


@NgModule({
  declarations: [
    DashboardComponent, 
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule,
    SpotPricingModule
  ],
})
export class DashboardModule { }
