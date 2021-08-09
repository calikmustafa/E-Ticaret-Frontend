import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car:Car[]=[]
  cardetail:CarDetail[]=[]
  constructor(private carService:CarService,private cardetailService:CardetailService) { }

  ngOnInit(): void {
    this.getCarDetail();
  }

  getCar(){
    this.carService.getCar().subscribe(response=>{
      this.car=response.data
    })
  }

  getCarDetail(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.cardetail=response.data
    })
  }

}
