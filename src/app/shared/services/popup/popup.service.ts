import { Injectable,Type } from '@angular/core';
import { DialogService,DynamicDialogRef } from 'primeng/dynamicdialog';
@Injectable({
  providedIn: 'root'
})
export class PopupService {
  ref!: DynamicDialogRef; 
  constructor(public dialog: DialogService) { }
  openPopUp(component: Type<any>, customHeader: string, name:boolean){
    this.ref = this.dialog.open(component, {
      closable: true,
      header: customHeader,
      style:{
        "min-width": "40%",
        "max-width": "100%",
        "min-height" : "max-content",
        "overflow-x" : "hidden",
      },
      data: {
        name: name
      } ,
      showHeader: true,
      baseZIndex:2000,
    })
  }

  closePopUp(){
    this.ref.destroy();
    this.ref.close();
  }
}
