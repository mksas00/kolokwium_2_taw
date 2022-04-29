import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemMSComponent } from './orders-item-ms.component';

describe('OrdersItemMSComponent', () => {
  let component: OrdersItemMSComponent;
  let fixture: ComponentFixture<OrdersItemMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
