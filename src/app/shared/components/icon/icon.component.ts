import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() iconName: string;
  @Input() value:number;
  @Input() size:string; // [values: "large" , "xlarge"] changes the size of the badge
  @Input() disableBadge: boolean = false;
  @Input() iconPosition: string;
  @Input() hover: boolean = false; // to apply hover style to the icon
  @Input() whiteIcon: boolean = false;

  ngOnInit(): void {
    this.setCurrentClasses()
  }

  currentClasses: Record<string, boolean> = {};

  setCurrentClasses() {
    this.currentClasses = {
      hover : this.hover,
      whiteIcon : this.whiteIcon
    };
  }

}
