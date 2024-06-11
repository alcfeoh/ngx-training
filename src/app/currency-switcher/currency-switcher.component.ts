import {Component, inject, Signal} from '@angular/core';
import {Currency} from './currency';
import {CurrencyInfo, CurrencyService} from '../currency.service';

@Component({
  selector: 'app-currency-switcher',
  standalone: true,
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = false;
  service = inject(CurrencyService);
  currencyInfo: Signal<CurrencyInfo> = this.service.getCurrency();

  changeCurrency(currency: Currency): void {
    this.service.setCurrency(currency);
    this.showItems = false;
  }
}
