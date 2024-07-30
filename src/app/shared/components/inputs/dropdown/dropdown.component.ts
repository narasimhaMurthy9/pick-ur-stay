import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() formGroup!: FormGroup;
  @Input() class = '';
  @Input() name = '';
  @Input() labelName = 'name';
  @Input() options: any = [];
  @Input() readonly = false;
  @Input() disabled = false;
  @Input() showClear = false;
  @Input() className = '';
  @Input() showErrorMessage = true;
  @Input() error = '';
  @Input() emptyFilterMessage = null;
  @Input() placeholder: string = null;
  @Input() filter = false;
  @Input() filterBy: string = null;
  @Input() label = '';
  @Input() requiredStar = false;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onChangeHappened = new EventEmitter<any>();
  onChangeEvent(event) {
    this.onChangeHappened.emit(event);
  }

}
