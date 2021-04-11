import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

   cars:Car[]=[];
   carId:number;
   carImages:CarImage[]=[];
   imageUrl:string="https://localhost:44334";
   
   dataLoaded=false;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private carImageService:CarImageService) 
  { } // servisi kullanabilmek için yapman gereken hareket ceysi !

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
    if(params["brandId"]){
      this.getCarsByBrand(params["brandId"])
    }
    else if (params["colorId"]){
      this.getCarsByColor(params["colorId"])
    }
    else if (params["carId"]){
      this.getCarsDetail(params["carId"])
    }
    else{
      this.getCars()
    }

  })
    
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
    })
   
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
    })
   
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response =>{
      this.cars=response.data
      this.dataLoaded=true;
    })
   
  }

  getCarsDetail(carId:number){
    this.carService.getCarsDetail(carId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })

  }


  getImagesByCarId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response=>{
     this.carImages=response.data;
     this.dataLoaded=true;
    });
  }

  getCarById(carId:number){
    this.carService.getCarsDetail(carId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })

  }

}
