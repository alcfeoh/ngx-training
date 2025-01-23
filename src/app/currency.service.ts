import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import {Currency} from './currency-switcher/currency';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';

type ExchangeRates = Record<Currency, number>

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  // private currency$ = new BehaviorSubject<Currency>("USD");
  private currency = signal<Currency>("USD");

  // private exchangeRates$ = inject(HttpClient).get<ExchangeRates>("https://lp-store-server.vercel.app/rates");
  private exchangeRates = toSignal(
    inject(HttpClient).get<ExchangeRates>("https://lp-store-server.vercel.app/rates"),
    {initialValue: {USD: 1, EUR: 1, GBP: 1}}
  );

  //private currentRate$ = this.currency$.pipe(
  //  withLatestFrom(this.exchangeRates$),
  //  map(([curr, rates]) => rates[curr])
  //);

  private currentRate = computed(() => {
    const rates = this.exchangeRates();
    const curr = this.currency();
    return rates[curr];
  })

  getExchangeRate(): Signal<number> {
    return this.currentRate;
  }

  getCurrency(): Signal<Currency> {
    return this.currency.asReadonly();
  }

  setCurrency(currency: Currency): void {
    this.currency.set(currency);
  }
}
