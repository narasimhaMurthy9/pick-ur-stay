import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  @Input() formGroup: FormGroup;
  @Input() name: string
  @Input() label = '';
  @Input() error = '';
  @Input() showIcon: boolean = false;
  @Input() iconName: string = '';
  @Input() disabled: boolean = false;
  @Input() requiredStar = false;
  @Input() selectionMode = '';
  @Input() placeholder :string = '';
  @Input() dateFormat :string = 'mm/dd/yy';
  @Input() rangeSeparator :string = '-';
  @Input() multipleSeparator :string = ',';
  @Input() timeOnly: boolean = false;
  @Input() hourFormat:string = '12';
  @Input() showClear: boolean = false;
  @Input() maxDateCount: number;
  @Input() showButtonBar: boolean = false;
  @Input() dateAndTime: boolean = false;
  @Input() minDate : Date;
  @Input() maxDate : Date;
  @Output() dateSelected = new EventEmitter<Date>();
  @Output() dateRangeSelected=new EventEmitter<Date>()
  
  constructor(){}

  onDateSelect(selectedDate: Date){
    this.dateSelected.emit(selectedDate);
    
  }

 

}
