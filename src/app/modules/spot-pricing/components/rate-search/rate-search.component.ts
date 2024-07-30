import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RateLookupService } from '../../services/rate-lookup.service';
import { inputValidations } from 'src/app/core/common/utils';
import * as _ from 'lodash';
import { RateSearchService } from '../../services/rate-search.service';
import { LoactionResponse } from '../../interfaces/locations-model';


@Component({
  selector: 'app-rate-search',
  templateUrl: './rate-search.component.html',
  styleUrls: ['./rate-search.component.scss'],
})
export class RateSearchComponent implements OnInit {
  rateLookUpForm: FormGroup;
  locations: any[];
  filteredLocation: any[];
  originFieldValue: any;
  destinationFieldValue: any;
  errormessages: string;
  selectedOrigin: LoactionResponse;
  selectedDestination: LoactionResponse;
  pickupMinDate: Date = new Date();
  maxDate: Date;
  pickUpDate: Date;
  formatPickupDate: any;
  selectedEquipment: any;
  maxAllowedLength: number;
  mockResponse: any;
  greenScreenTargetBuyRate: any;
  greenScreenConfidenceLevel: any;
  GreenSreenAndDatRates: any;
  showGreenScreensComp: boolean = false;
  loadingbtn: boolean = false;
  selectedRange: any;
  pickupStartDate: any;
  pickupDateUTC:any;
  pickupEndDate: any;
  enteredSearchParameters: any;
  invalidOrigin: boolean = true;
  invalidDestination: boolean = true;
  invalidOriginError: boolean = false;
  invalidDestinationError: boolean = false;
  // equipment types for dropdown options
  equipmentTypes = [
    { name: 'FLATBED', value: 'FLAT_BED' },
    {
      name: 'VAN',
      value: 'VAN',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private rateLookupService: RateLookupService,
    private rateSearchService: RateSearchService
  ) {
    this.rateLookUpForm = this.fb.group({
      origin: [null, Validators.required],
      destination: [null, Validators.required],
      pickUpDate: [null, Validators.required],
      equipmentType: [null, Validators.required],
      guests:[null, Validators.required]
    });
  }

  ngOnInit(): void {}

  // clear the form data
  onClear() {
    this.invalidOriginError = false;
    this.invalidDestinationError = false;
    this.rateLookUpForm.reset();
    this.showGreenScreensComp=false
  }

  // get locations on typing
  locationData(event) {
    this.rateSearchService
      .sendLocationData(event)
      .subscribe((filteredLocation: any[]) => {
        if (filteredLocation) this.filteredLocation = filteredLocation;
      });
  }

  // selected location by clicking on suggestions
  selectedLocation(event, target):LoactionResponse | null {
    if (event) {
      if (target == 'origin') {
        this.selectedOrigin = {
          cityName: event.city,
          stateCode: event.state,
          name: `${event.city},${event.state}`,
          zipCode: event.zipCode,
        };
        this.invalidOriginError = false;
        this.invalidOrigin = false;
      } else if (target == 'destination') {
        this.invalidDestination = true;
        this.selectedDestination = {
          cityName: event.city,
          stateCode: event.state,
          name: `${event.city},${event.state}`,
          zipCode: event.zipCode,
        };
        this.invalidDestinationError = false;
        this.invalidDestination = false;
      }
    }

    return null;
  }

  // trim the spaces at front
  spaceTrim(event:any) {
    return this.rateSearchService.spaceTrim(event);
  }

  //input validation
  inputValidationsErrors = (rateForm: FormGroup, type: string) => {
    return inputValidations(rateForm, type);
  };

  // if origin entered manually , not by selecting suggestions
  onChangeOrigin(event:any) : LoactionResponse {
    this.invalidOrigin = true;

    let selectedOrigin = this.rateSearchService.onChangeLocation(
      event,
      'origin',
      this.rateLookUpForm
    ); 
    if (selectedOrigin) {
      this.selectedOrigin = selectedOrigin;
      this.invalidOrigin = false;
      this.invalidOriginError = false;
      return this.selectedOrigin;
    }
    this.invalidOrigin = true;
    this.invalidOriginError = true;
    return null;
  }

  // if destination entered manually , not by selecting options

  onChangeDestination(event:any): LoactionResponse  | null {
    this.invalidDestination = true;
    let selectedDestination = this.rateSearchService.onChangeLocation(
      event,
      'destination',
      this.rateLookUpForm
    );

    if (selectedDestination) {
      this.selectedDestination = selectedDestination;
      this.invalidDestination = false;
      this.invalidDestinationError = false;
      return this.selectedOrigin;
    }
    this.invalidDestination = true;
    this.invalidDestinationError = true;
    return null;
  }

  // selection equipment
  equipmentSelected(event) {
    this.selectedEquipment = event.value.name;
  }

  // pickup date

  onPickupDate() {
    let selectedRange = this.rateLookUpForm.value.pickUpDate;

    let formatPickupDate = this.rateSearchService.onPickupDate(selectedRange);

    if (formatPickupDate) {
      this.pickupStartDate = formatPickupDate.pickupStartdate;
      this.pickupEndDate = formatPickupDate.pickupEnddate;
      this.pickupDateUTC=formatPickupDate.pickupDateUTC;

    }
  }

  // validate date
  validateLocation(form, name) {
    const control = form.controls[name];
    const errorStatus = control?.errors?.invalidFormat;
    if (errorStatus) {
      return true;
    }
    return false;
  }

  // validate date
  dateValidate(form) {
    const fieldName = form.controls['pickUpDate'];
    const dateField = form.value?.pickUpDate;
    if (dateField) {
      const errorStatus = dateField !== null && dateField?.includes(null);
      if (errorStatus) {
        fieldName.setErrors({ incorrect: true });
        return true;
      }
    }
    return null;
  }

  // make api cal for getting rates
  onRateSearch() {
    if (this.loadingbtn === true) return;
    this.loadingbtn = true;
    this.onPickupDate();

    this.enteredSearchParameters = {
      origin: _.omit(this.selectedOrigin, 'name'),
      destination: _.omit(this.selectedDestination, 'name'),
      equipmentType: this.selectedEquipment,
      pickupStartDate: this.pickupStartDate,
      pickupEndDate: this.pickupEndDate,
      pickupDateUTC:this.pickupDateUTC
    };

    this.showGreenScreensComp = false;
    this.rateLookupService
      .getRates(this.enteredSearchParameters)
      .subscribe((rates) => {
        this.GreenSreenAndDatRates = rates;
        this.loadingbtn = false;
        this.showGreenScreensComp = true;
      });
  }

  swapLocations() {
    const currentOrigin = this.rateLookUpForm.get('origin').value;
    const currentDestination = this.rateLookUpForm.get('destination').value;

    // Swap the values
    this.rateLookUpForm.patchValue({
      origin: currentDestination,
      destination: currentOrigin,
    });
    this.selectedOrigin = currentDestination;
    this.selectedDestination = currentOrigin;
  }

  clearField(name) {
    return name == 'origin'
      ? (this.invalidOrigin = true)
      : (this.invalidDestination = true);
  }
}
