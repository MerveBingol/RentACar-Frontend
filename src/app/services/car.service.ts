import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44334/api/';

  constructor(private httpClient:HttpClient) { }
   
  getCars():Observable<ListResponseModel<Car>>{   // subscribe olunabilir bir responseModel döneceksin
    let newPath=this.apiUrl+"cars/getcardetails"
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
    
 }
 getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{ 
  let newPath=this.apiUrl+"cars/getbybrand?brandId="+brandId
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{ 
  let newPath=this.apiUrl+"cars/getbycolor?colorId="+colorId 
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
   
}

getCarsDetail(carId:number):Observable<ListResponseModel<Car>>{ 
  let newPath=this.apiUrl+"cars/getcarsdetail?carId="+carId 
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
   
}
getByCarIdImage(carId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+ + "carImages/getbyid?carid="+carId;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}



}
