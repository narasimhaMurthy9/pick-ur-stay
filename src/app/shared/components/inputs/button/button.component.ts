import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() type = Button;
  @Input() class = '';
  @Input() icon: string;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() loadingIcon = false;
  @Input() mainClass = '';
  @Input() iconPosition: string;

  @Output() submitForm = new EventEmitter();

  onSubmit(): void {
    this.submitForm.emit();
  }
}
