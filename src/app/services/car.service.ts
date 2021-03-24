import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44334/api/Cars/getcardetails';

  constructor(private httpClient:HttpClient) { }
   
  getCars():Observable<CarResponseModel>{   // subscribe olunabilir bir responseModel döneceksin
   return this.httpClient.get<CarResponseModel>(this.apiUrl);
    
 }

}
