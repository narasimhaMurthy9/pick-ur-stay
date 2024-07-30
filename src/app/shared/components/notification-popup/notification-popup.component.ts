import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss'],
  animations: [
    trigger('list1', [
      state('in', style({
        'opacity': '1',
        'transform':'translateX(0)'
      })),
      transition('void => *', [
        style({
          'opacity': '0',
          'transform': 'translateX(100px)'
        }),
        animate(1000)
      ]),
      transition('* => void', [
        style({
          'opacity': '0',
          'transform': 'translateX(0px)'
        }),
        animate(300)
      ]),
    ])
  ]
})
export class NotificationPopupComponent {
  notificationsCount: number = 1;
  constructor(private router:Router){}
  notificationsList: any[] = [
    {
      mcNum: 1234,
      carrierName: "Arcam",
      recievedTime: "Just now",
      notification: "Operations team 1 has submitted Adipose carrier  for validation on 04/22/2022, 09:30 pm. Click here to validate the carrier."
    },
    {
      mcNum: 5678,
      carrierName: "madhu",
      recievedTime: "Just now",
      notification: "Operations team 1 has submitted Adipose carrier  for validation on 04/22/2022, 09:30 pm. Click here to validate the carrier."
    },
    {
      mcNum: 1111,
      carrierName: "Adipose",
      recievedTime: "Just now",
      notification: "Operations team 1 has submitted Adipose carrier  for validation on 04/22/2022, 09:30 pm. Click here to validate the carrier."
    },
    {
      mcNum: 2222,
      carrierName: "Wasp",
      recievedTime: "Today at 02:42pm",
      notification: "Operations team 1 has submitted Adipose carrier  for validation on 04/22/2022, 09:30 pm. Click here to validate the carrier."
    },
  ];
  onNotificationSlected(notification: {mcNum: number,carrierName: string,recievedTime: string,notification: string}){
    this.router.navigate(['dashboard/details', notification.mcNum]);
  }
}
