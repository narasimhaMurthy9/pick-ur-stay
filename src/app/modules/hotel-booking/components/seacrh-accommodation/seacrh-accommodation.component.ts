import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inputValidations } from 'src/app/core/common/utils';

@Component({
  selector: 'app-seacrh-accommodation',
  templateUrl: './seacrh-accommodation.component.html',
  styleUrls: ['./seacrh-accommodation.component.scss']
})
export class SeacrhAccommodationComponent {
searchHotelsForm:FormGroup;
checkInMinDate: Date = new Date();
locationSelected:any
sendLocationData:any
showHotelsData:boolean = false
sendCheckIn:any;
sendCheckOut:any;
maxDate: Date;
  constructor(private fb:FormBuilder){
    this.searchHotelsForm = this.fb.group({
      location: [null, Validators.required],
      checkIn: [null, Validators.required],
      NumOfGuests: [null, Validators.required],
    });
  }

//input validation
inputValidationsErrors = (searchForm: FormGroup, type: string) => {
  return inputValidations(searchForm, type);
};

  LocationsData = [
    { name: 'Visakhapatnam', value: 'visakhapatnam' },
    {
      name: 'Vizianagaram',
      value: 'vizianagaram',
    },
    {
      name: 'Srikakulam',
      value: 'srikakulam',
    },
  ];



  searchLocation(event){
    this.locationSelected = event.value
  }


  // validate date
  dateValidate(form) {
    const fieldName = form.controls['checkIn'];
    const dateField = form.value?.checkIn;
    if (dateField) {
      const errorStatus = dateField !== null && dateField?.includes(null);
      if (errorStatus) {
        fieldName.setErrors({ incorrect: true });
        return true;
      }
    }
    return null;
  }

  onRateSearch(){
   this.showHotelsData = true
   this.sendLocationData=this.locationSelected
   this.sendCheckIn= this.searchHotelsForm.controls['checkIn'].value
  }
}
