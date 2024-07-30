import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input('image') imageUrl: string;
  @Input() size: any;
  @Input() shape: any;
  @Input() label: string;
  @Input() class: string;
}
