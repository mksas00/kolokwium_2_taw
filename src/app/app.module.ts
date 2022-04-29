import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MSDataService} from "./service/ms-data.service";
import {HttpClientModule} from "@angular/common/http";
import { OrdersMSComponent } from './component/orders-ms/orders-ms.component';
import { OrdersItemMSComponent } from './component/orders-item-ms/orders-item-ms.component';
import { OrdersDetailsMSComponent } from './component/orders-details-ms/orders-details-ms.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersMSComponent,
    OrdersItemMSComponent,
    OrdersDetailsMSComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MSDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
