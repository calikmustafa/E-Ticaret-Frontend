import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/rentaldetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {

  apiUrl="https://localhost:44371/api/rentals/getdetaillisted"

  constructor(private httpClient:HttpClient) { 
    
  }

  getRentalDetail():Observable<RentalDetailResponseModel>{
    return this.httpClient.get<RentalDetailResponseModel>(this.apiUrl);
  }
}
