import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersMSComponent} from "./component/orders-ms/orders-ms.component";
import {OrdersDetailsMSComponent} from "./component/orders-details-ms/orders-details-ms.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersMSComponent
  },
  {
    path: 'post/:id',
    component: OrdersDetailsMSComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
