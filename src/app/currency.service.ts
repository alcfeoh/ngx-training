import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, withLatestFrom} from 'rxjs';
import {Currency} from './currency-switcher/currency';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

type ExchangeRates = Record<Currency, number>

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currency$ = new BehaviorSubject<Currency>("USD");
  private exchangeRates$ = inject(HttpClient).get<ExchangeRates>("https://lp-store-server.vercel.app/rates");
  private currentRate$ = this.currency$.pipe(
    withLatestFrom(this.exchangeRates$),
    map(([curr, rates]) => rates[curr])
  );

  getExchangeRate(): Observable<number> {
    return this.currentRate$;
  }

  getCurrency(): Observable<Currency> {
    return this.currency$.asObservable();
  }

  setCurrency(currency: Currency): void {
    this.currency$.next(currency);
  }
}
