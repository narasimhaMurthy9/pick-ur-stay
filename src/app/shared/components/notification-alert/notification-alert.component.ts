import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification-alert',
  templateUrl: './notification-alert.component.html',
  styleUrls: ['./notification-alert.component.scss']
})
export class NotificationAlertComponent {
  @Input() alertNotificationList: any[];
  @Input() page: boolean = false;
  @Input() alerts: boolean = false;
  @Output() selectedNotification = new EventEmitter<{carrierName: string, recievedTime: string}>();


  // Close a single notification
  onClose(carrier: any){
    this.alertNotificationList.splice(this.alertNotificationList.indexOf(carrier),1);
  }

  // Select a notification, then emit the selected notification to the parent component,
  // open the carrier of the selected notification and delete the particular notification.
  selectNotificaton(carrier: any){

    this.selectedNotification.emit(carrier);
    this.onClose(carrier.mcNum);
  }
}
