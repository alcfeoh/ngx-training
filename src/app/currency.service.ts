import { HttpClient } from '@angular/common/http';
import { Currency } from './currency-switcher/currency';
import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

interface ExchangeRates {
  EUR: number;
  GBP: number;
  USD: number;
}

interface CurrencyInfo {
  currency: Currency;
  exchangeRate: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private http = inject(HttpClient);
  private rates = signal<ExchangeRates>({USD : 1, GBP: 1, EUR: 1});
  readonly currency = signal<Currency>("USD");

  readonly currencyInfo = computed<CurrencyInfo>(() => {
    console.log("New rates applied");
    let currency = this.currency();
    let rates = this.rates();
    let exchangeRate = rates[currency];
    return {currency, exchangeRate};
  });

  constructor() {
    this.updateRates();
    setInterval(() => {
      this.updateRates();
    }, 10000);
  }

  private updateRates() {
    this.http.get<ExchangeRates>("http://localhost:8000/rates")
    .subscribe(newRates => this.rates.set(newRates) )
  }
}
