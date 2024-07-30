import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { baseUrls } from 'src/app/core/common/baseUrls';
import { equipmentInfo } from '../components/view-dat-loads/equipmentConfig';
import * as moment from 'moment';
import { Observable, Subject, takeUntil } from 'rxjs';
import { RatesResponse } from '../interfaces/rates-interface';
@Injectable({
  providedIn: 'root',
})
export class RateLookupService {
  private baseUrl: string = environment.API_URL;
  private rateSearchUrl: string = baseUrls.rateSearch_url;
  private greenscreensURL: string = environment.GREENSCREENS_URL;
  private cancelRequests$ = new Subject<void>();
  constructor(private http: HttpClient) {}

  //  for getting locations
  getLocation(value) {
    let params = new HttpParams();
    params = params.append('search', value);

    return this.http.get(this.baseUrl + 'api/v1/locations', {
      params: params,
    });
  }

  // for getting greenscreens and and dat rates
  getRates(locationInfo):Observable<RatesResponse> {
    return this.http.post<RatesResponse>(this.baseUrl + this.rateSearchUrl, locationInfo);
  }

 // for gettting dat load postings
 
 getDatLoadPostings(dataurl: string, orderBy?: string, type: 'infiniteLoad' | 'sort' = 'infiniteLoad'): Observable<any> | null {
  let params = new HttpParams().append('url', type === 'sort' && orderBy ? encodeURI(`${dataurl}?orderBy=${orderBy}`) : dataurl);
  this.cancelRequests$.next();
  if (type === 'infiniteLoad' || type === 'sort') {
    return this.http.get(`${this.baseUrl}api/rating/dat-loads`, { params: params }).pipe(
      takeUntil(this.cancelRequests$)
    )
  }

  return null;
}
  // multiply the values of rate and mileage

  mulitply(rate: number, mileage: number) {
    let ratePerMile = rate * mileage; 
    if (ratePerMile) {
      return this.getRounded(ratePerMile);
    }

    return null;
  }

  // if the deciaml values of the coming value is greater than  0.5 then math ceil or math floor

  getRounded(value: number) {
    if (value == null) return null;
    // check for if decimal part of the value consists of greater than 0.5 or less than 0.5
    if (value % 1 >= 0.5) {
      return Math.ceil(value);
    }
    return Math.floor(value);
  }

  // for rate(rate/mi)
  add(rate: number, fuelCharge: number) {
    // sum of rate + fuel charge
    let finalDatLaneRate = rate + fuelCharge;
    if (finalDatLaneRate) {
      return this.getRounded(finalDatLaneRate);
    }

    return null;
  }
  // for rate(rate/mi)
  ratePerMileDat(rate: number, fuelCharge: number) {
    // sum of rate + fuel charge
    let finalDatLaneRate = rate + fuelCharge;
    if (finalDatLaneRate) {
      return finalDatLaneRate;
    }

    return null;
  }
  //  based on equipment type , find  the equipment name in the available equipment type array
  findEquipmentType(equipmentValue) {
    if (equipmentValue) {
      const equipment = equipmentInfo.find(
        (equ) => equ.equipmentType === equipmentValue
      );
      return equipment
        ? equipment.equipmentType + ' - ' + equipment.equipmentName
        : '-';
    }
    return ' - ';
  }

  // formate the date as mm/dd

  formatDate(date: Date) {
    let pickup = new Date(date);

    let day = pickup.getDate();
    let month = pickup.getMonth() + 1;
    let year = pickup.getFullYear();
    let pickupDate = month + '/' + day;
    return pickupDate;
  }

  // check for rate & distance is NaN , if not calculate rate per mile

  findRatePerMile(rate: number, distance: number) {
    if (isNaN(rate) || rate == 0 || isNaN(distance) || distance == 0) {
      return '-';
    } else {
      let ratePerMile = rate / distance;
      return '$' + rate + ' ($' + ratePerMile.toFixed(2) + ')';
    }
  }

  findCurrentAge(date) {
    const currentMoment = moment();
    const servicedWhenMoment = moment(date);
    const ageInMinutes = Math.floor(
      currentMoment.diff(servicedWhenMoment, 'minutes')
    );
    const ageInHours = Math.floor(
      currentMoment.diff(servicedWhenMoment, 'hours')
    );
    const ageInDays = currentMoment.diff(servicedWhenMoment, 'days');
    if (ageInDays) {
      return `${Math.floor(ageInDays)}d`;
    } else if (ageInHours) {
      return `${Math.floor(ageInHours)}h`;
    } else if (ageInMinutes) {
      return `${Math.floor(ageInMinutes)}m`;
    } else {
      return ' - ';
    }

 
  }

  navigateToGreenscreens(searchedParams: any): void {  

    const { origin, destination, equipmentType, pickupStartDate,pickupDateUTC } = searchedParams;
    const url = `${this.greenscreensURL}rates?originCityState=${origin.cityName.split(' ').join('+')} ${origin.stateCode}&destinationCityState=${destination.cityName.split(' ').join('+')} ${destination.stateCode}&transportType=${equipmentType}&pickupDate=${pickupDateUTC.slice(0,-1)}`;
    window.open(url, '_blank');
  }
  
  ngOnDestroy(): void {
    this.cancelRequests$.next(); // Ensure any pending requests are canceled
    this.cancelRequests$.complete(); // Complete the subject to release resources
  }
}

