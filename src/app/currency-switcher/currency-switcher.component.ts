import {Component, inject} from '@angular/core';
import {Currency} from './currency';
import {CurrencyService} from '../currency.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  imports: [
    AsyncPipe
  ],
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = false;
  service = inject(CurrencyService);
  currency = this.service.getCurrency();

  changeCurrency(currency: Currency): void {
    this.service.setCurrency(currency);
    this.showItems = false;
  }
}
