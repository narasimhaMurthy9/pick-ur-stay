import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PrimeUiModule } from './prime-ui/prime-ui.module';
import { ToastrModule } from 'ngx-toastr';
import { PopupService } from './services/popup/popup.service';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      // disableTimeOut:true,
      resetTimeoutOnDuplicate: true,
      preventDuplicates: true,
      positionClass: 'toast-top-right',
      closeButton: false,
    }),
  ],
  exports:[
    ComponentsModule,
    PrimeUiModule,
    
  ],
  providers:[DialogService]
 

})
export class SharedModule { }
