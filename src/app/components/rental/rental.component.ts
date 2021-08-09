import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentaldetail';
import { RentalService } from 'src/app/services/rental.service';
import { RentaldetailService } from 'src/app/services/rentaldetail.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rental:Rental[]=[]
  rentaldetail:RentalDetail[]=[]
  
  constructor(private rentalservice:RentalService,private rentaldetailservice:RentaldetailService) { }

  ngOnInit(): void {
    this.getRentalDetail()
  }

  getRental(){
    this.rentalservice.getRental().subscribe(response=>{
      this.rental=response.data
    })
  }

    getRentalDetail(){
      this.rentaldetailservice.getRentalDetail().subscribe(response=>{
        this.rentaldetail=response.data
      })
    }


  }


