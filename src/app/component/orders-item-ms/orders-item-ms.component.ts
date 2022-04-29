import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-ms',
  templateUrl: './orders-item-ms.component.html',
  styleUrls: ['./orders-item-ms.component.css']
})
export class OrdersItemMSComponent implements OnInit {

  @Input() id?:string
  @Input() title?:string
  @Input() text?:string
  @Input() image?:string


  constructor() { }

  ngOnInit(): void {
  }

}
