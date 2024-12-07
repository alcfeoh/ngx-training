import { CurrencyPipe } from '@angular/common';
import { Currency } from './currency-switcher/currency';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRenderer',
  standalone: true
})
export class CurrencyRendererPipe implements PipeTransform {

  transform(value: number, currency: Currency = "USD", exchangeRate = 1): string | null {
    return new CurrencyPipe("en-US")
         .transform(value / exchangeRate, currency, "symbol", "1.0-2");
  }

}
