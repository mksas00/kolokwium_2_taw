import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MSDataService} from "../../service/ms-data.service";


@Component({
  selector: 'app-orders-details-ms',
  templateUrl: './orders-details-ms.component.html',
  styleUrls: ['./orders-details-ms.component.css']
})
export class OrdersDetailsMSComponent implements OnInit {


  public text: any = ""
  public image: any = ""


  constructor(private service: MSDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });

    this.service.getOne(id).subscribe((res: any) => {
      this.image = res['image'];
      this.text = res['text'];
    });


  }

}
