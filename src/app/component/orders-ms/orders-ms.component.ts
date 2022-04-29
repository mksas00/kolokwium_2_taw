import { Component, OnInit } from '@angular/core';
import {MSDataService} from "../../service/ms-data.service";

@Component({
  selector: 'app-orders-ms',
  templateUrl: './orders-ms.component.html',
  styleUrls: ['./orders-ms.component.css']
})
export class OrdersMSComponent implements OnInit {

  constructor(private service: MSDataService) { }

  public items$: any;

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.service.getAll().subscribe(response=>{
      this.items$=response
    })
  }

}
