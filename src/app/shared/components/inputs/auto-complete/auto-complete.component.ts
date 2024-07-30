
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent {

 @Input() label:string
@Input() className = '';
@Input() error = '';
@Input() formGroup:FormGroup
@Input() name:any
@Input() suggestions:any
@Input() placeholder:string
@Input() isDisabled:boolean
@Input() maxlength:number
@Input() emptyMessage:string
@Input() isRequired:boolean=false
@Input() showClear:boolean=false
@Input() selectedOption:any
@Input() requiredStar = false;
@Output() filteredOption= new EventEmitter()
@Output() suggestionList= new EventEmitter()
@Output() selectedSuggestionOption= new EventEmitter()
@Output() clearInputData = new EventEmitter()
@Output() clearFieldtData = new EventEmitter()
@Output() removespaces = new EventEmitter();
@Output() inputChange = new EventEmitter();
// emit or show the filterd options in dropdown


// selected option from suggesitons
selectedSuggestion(event){
this.selectedSuggestionOption.emit(event)
}

// clear the input filed
clearData(){
this.clearInputData.emit()
}
// remove the spaces 
spaceTrim(event) {
  this.removespaces.emit(event);
}
// invoke when release a key
onChangeInput(event){
this.inputChange.emit(event)
}

// invoke the suggestions based on entered text
filtersuggestions(event){
  this.suggestionList.emit(event)
}

// clearData
clearField() {
  this.clearFieldtData.emit()
}

}
