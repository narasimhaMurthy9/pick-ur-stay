import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './inputs/input-text/input-text.component';
import { ButtonComponent } from './inputs/button/button.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { PrimeUiModule } from '../prime-ui/prime-ui.module';
import { PasswordComponent } from './inputs/password/password.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { AvatarComponent } from './avatar/avatar.component';
import { IconComponent } from './icon/icon.component';
import { NotificationAlertComponent } from './notification-alert/notification-alert.component';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { AutoCompleteComponent } from './inputs/auto-complete/auto-complete.component';
import { CalendarComponent } from './inputs/calendar/calendar.component';
import { DropdownComponent } from './inputs/dropdown/dropdown.component';
import { IntersectionObserverDirective } from './_directives/intersection-observer.directive';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    InputTextComponent,
    ButtonComponent,
    PasswordComponent,
    HeaderComponent,
    TableComponent,
    AvatarComponent,
    IconComponent,
    NotificationAlertComponent,
    NotificationPopupComponent,
    AutoCompleteComponent,
    CalendarComponent,
    DropdownComponent,  
    IntersectionObserverDirective, 
    TooltipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeUiModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    ButtonComponent,
    PasswordComponent,
    HeaderComponent,
    TableComponent,
    IconComponent,
    NotificationAlertComponent,
    NotificationPopupComponent,
    AutoCompleteComponent,
    CalendarComponent ,
    DropdownComponent,
    IntersectionObserverDirective,
    TooltipComponent

  ]
})
export class ComponentsModule { }
