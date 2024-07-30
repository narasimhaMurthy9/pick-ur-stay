import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() toolTipMessage: string;
  @Input() toolTipSymbol: string;
  @Input() tooltipPosition: string = 'bottom';
  @Input() isRates: boolean = false;
  @Input() isEmpty: boolean = false;
  @Input() isLink: boolean = false;
  @Output() clicked = new EventEmitter<boolean>();

  constructor() {}

  onClick(isLink: boolean) {
    if (!isLink) return;
    this.clicked.emit(true);
  }
}
