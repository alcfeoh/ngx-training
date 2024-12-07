import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('CurrencyService', () => {
  let service: CurrencyService;

  const fakeHttpClient = {
    get: () => of({EUR: 2, GBP: 1.5, USD: 1})
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: fakeHttpClient}]
    });
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use USD as a default currency', () => {
    expect(service.currency()).toBe("USD");
    expect(service.currencyInfo()).toEqual({currency: "USD", exchangeRate: 1});
  });

  it('should get exchange rates from the server', () => {
    service.currency.set("GBP");
    expect(service.currencyInfo()).toEqual({currency: "GBP", exchangeRate: 1.5});
    service.currency.set("EUR");
    expect(service.currencyInfo()).toEqual({currency: "EUR", exchangeRate: 2});
  });
});
