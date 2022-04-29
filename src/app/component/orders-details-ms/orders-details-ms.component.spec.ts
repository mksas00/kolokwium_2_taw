import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsMSComponent } from './orders-details-ms.component';

describe('OrdersDetailsMSComponent', () => {
  let component: OrdersDetailsMSComponent;
  let fixture: ComponentFixture<OrdersDetailsMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
