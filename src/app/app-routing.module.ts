import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/components/auth/auth.component';
import { AuthGuardGuard } from './modules/auth/services/auth-guard.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'index.html',
    pathMatch: 'full',
  },
 
  {
    path:'index.html',
    loadChildren:()=>
       import('./modules/hotel-booking/hotel-booking.module').then((m)=>m.HotelBookingModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { 

  
}
