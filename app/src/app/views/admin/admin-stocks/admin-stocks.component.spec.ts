import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStocksComponent } from './admin-stocks.component';

describe('AdminStocksComponent', () => {
  let component: AdminStocksComponent;
  let fixture: ComponentFixture<AdminStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
