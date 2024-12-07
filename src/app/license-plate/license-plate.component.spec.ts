import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateComponent } from './license-plate.component';
import { CurrencyService } from '../currency.service';
import { signal } from '@angular/core';
import { CALIFORNIA_PLATE } from '../mock-data';
import { By } from '@angular/platform-browser';

fdescribe('LicensePlateComponent', () => {
  let component: LicensePlateComponent;
  let fixture: ComponentFixture<LicensePlateComponent>;

  const fakeCurrencyService = {
    currencyInfo: signal({currency: "USD", exchangeRate: 1})
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: CurrencyService, useValue: fakeCurrencyService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensePlateComponent);
    component = fixture.componentInstance;
    component.plate = CALIFORNIA_PLATE;
    component.buttonText = "Add to cart";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right title', () => {
    const title = fixture.debugElement.query(By.css("h2")).nativeElement;
    expect(title.textContent).toContain("2013 CALIFORNIA MY TAHOE LICENSE PLATE");
  });

  it('should display the right button text', () => {
    const button = fixture.debugElement.query(By.css("button")).nativeElement;
    expect(button.textContent).toContain("Add to cart");
  });
});
