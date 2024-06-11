import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import {Currency} from './currency-switcher/currency';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';

export type ExchangeRates = Record<Currency, number>;

export interface CurrencyInfo {
  currency: Currency;
  exchangeRate: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private readonly currency = signal<Currency>("USD");
  private http = inject(HttpClient);
  private exchangeRates$ = this.http.get<ExchangeRates>("https://lp-store-server.vercel.app/rates");
  private exchangeRates = toSignal(this.exchangeRates$, {initialValue: {USD: 1, EUR: 1, GBP: 1} });

  currencyInfo: Signal<CurrencyInfo> = computed(() => {
    return {currency: this.currency(), exchangeRate: this.exchangeRates()[this.currency()]}
  } )

  getCurrency(): Signal<CurrencyInfo> {
    return this.currencyInfo;
  }

  setCurrency(currency: Currency): void {
    this.currency.set(currency);
  }
}
