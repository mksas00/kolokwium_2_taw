import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMSComponent } from './orders-ms.component';

describe('OrdersMSComponent', () => {
  let component: OrdersMSComponent;
  let fixture: ComponentFixture<OrdersMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
