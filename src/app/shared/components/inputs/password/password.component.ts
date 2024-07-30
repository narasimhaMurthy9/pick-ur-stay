import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  @Input() formGroup: FormGroup;
  @Input() name: '';
  @Input() feedback: false;
  @Input() disabled: false;
  @Input() toggleMask: boolean;
  @Input() class = 'inputbox';
  @Input() placeholder: string;
  @Input() label: string;
  @Input() requiredStar = false;
  @Input() maxlength: number = null;
  @Input() minlength: number = null;
  @Input() showErrorMessage = true;
  @Input() error = '';
  @Input() icon = '';
  @Input() className = '';
  @Input() inlineStyle = '';
  @Input() spaces: number;
  @Output() eventHappend = new EventEmitter();
  style: string;
  
  
  eventFromInput(event: Event) {
    this.eventHappend.emit(event);
  }
}
