import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoactionResponse } from '../interfaces/locations-model';

@Injectable({
  providedIn: 'root',
})
export class RateSearchService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.API_URL;
  private cancelRequests$ = new Subject<void>();

  getLocations(value): Observable<LoactionResponse[]> {  
    let params = new HttpParams().append('search', value.replace(', ', ',').trim());
    return this.http.get<LoactionResponse[]>(this.baseUrl + 'api/v1/locations', { params: params });
  }

  sendLocationData(event): Observable<LoactionResponse[]> {
    let searchTerm = event.query;

    this.cancelRequests$.next();

    return this.getLocations( searchTerm )
      .pipe(
        map((locationsResponse: any) => {
          if (locationsResponse.data.length === 0) {
            return [];
          }
          return locationsResponse.data.map((location) => ({
            city: location.cityName,
            state: location.stateCode,
            zipCode: location.zipCode,
          }));
        }),
        takeUntil(this.cancelRequests$)
      );
  }


  // if origin entered manually , not by selecting suggestions
  onChangeLocation(event, location, form):LoactionResponse | null {
    event.target.value = event.target.value.replace(/[^a-zA-Z0-9, ]/g, '');
    let fieldValue = event.target.value.trim();
    let regexForCityAndStateWithComma = /^[\w\s]+(,[\w\s]+)$/;

    if (fieldValue) {
      if (regexForCityAndStateWithComma.test(fieldValue)) {
        const selectedOrigin = this.enteredCityAndState(location, fieldValue);
        return selectedOrigin;
      } 
    }
    return null;
  }

  // if entered location contains only city , state
  enteredCityAndState(location: string, fieldValue: string) {
    const pattern = /(?<cityName>[\w\s]+),\s*(?<stateCode>[\w\s]+)/;

    const match = fieldValue.match(pattern);
    if (match && match.groups) {
      const { cityName, stateCode } = match.groups;

      if (location === 'origin') {
        let selectedOrigin = {
          cityName: cityName,
          stateCode: stateCode,
          name: `${cityName},${stateCode}`,
          zipCode: null,
        };
        return selectedOrigin;
      } else if (location === 'destination') {
        let selectedDestination = {
          cityName: cityName,
          stateCode: stateCode,
          name: `${cityName},${stateCode}`,
          zipCode: null,
        };

        return selectedDestination;
      }
    }

    return null;
  }

  //  remove spaces
  spaceTrim(event) {
    if (event.target.value.length == 0) {
      if (event.keyCode === 32) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  onPickupDate(fieldDateValue) {
    let pickupStartdate = fieldDateValue[0];
    let pickupDateUTC=fieldDateValue[0];
    let pickupEnddate = fieldDateValue[1];
    if (!pickupStartdate) return null;
    if (!pickupEnddate) return null;

    const dateFormat = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]';

    const result = {
      pickupStartdate: null,
      pickupEnddate: null,
      pickupDateUTC:null
    };

    let startDate = moment.tz(pickupStartdate, 'America/Los_Angeles').startOf('day');
    let endDate = moment.tz(pickupEnddate, 'America/Los_Angeles').startOf('day');
    let today = moment.tz('America/Los_Angeles').startOf('day');

    if (startDate.isSame(today)) {
      result.pickupStartdate = moment.tz('America/Los_Angeles').startOf('day').add(8, 'h').format(dateFormat);
    } else {
      result.pickupStartdate = startDate.add(8, 'hours').format(dateFormat);
    }
    result.pickupDateUTC=moment(pickupDateUTC).format(dateFormat)
    result.pickupEnddate = endDate.startOf('day').add(1,'day').add(7, 'hours').add(59, 'minutes').add(59, 's').format(dateFormat);
    // if (endDate.isSame(today)) {
    //   result.pickupEnddate = endDate.startOf('day').add(7, 'hours').add(59, 'minutes').add(59, 's').format(dateFormat);
    // } else {
    //   result.pickupEnddate = endDate.startOf('day').add(7, 'hours').add(59, 'minutes').add(59, 's').format(dateFormat);
    // }
    return result;
  }
}
