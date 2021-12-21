import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BillsService} from "../services/bills.service";

@Component({
  selector: 'app-customer',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class CustomerComponent implements OnInit {

  public bills;

  public bill;
  constructor(private billsService:BillsService) { }
  public total = 0;
  ngOnInit(): void {
  this.billsService.getBills()
    .subscribe(data =>{
  this.bills = data;


    },error => {
    console.log(error);
    })
  } //end method




  onGetBill(b: any) {


    this.total=0
      this.billsService.getBill(b).subscribe(data => {
        this.bill = data;
        this.bill.productItems.forEach(p =>{
          this.total = this.total + (p.quantity * p.price)
        })

      });
   return this.bill , this.total;
  }
}
