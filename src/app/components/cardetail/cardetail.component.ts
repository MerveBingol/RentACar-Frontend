import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  cars:Car[]=[];
  carId:number;
  carImages:CarImage[]=[];
  imageUrl:string="https://localhost:44334";
  dataLoaded=false;

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private carImageService:CarImageService) { }
   
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.getCarById(params['carId']);
      this.getImagesByCarId(params['carId']);
    })
  }

  getImagesByCarId(carId:number){
    this.carImageService.getByCarId(carId).subscribe((response)=>{
     this.carImages=response.data;
     this.dataLoaded=true;
    });
  }

  getCarById(carId:number){
    this.carService.getCarsDetail(carId).subscribe((response)=>{
     this.cars=response.data;
     this.dataLoaded=true;
    });
  }

}
