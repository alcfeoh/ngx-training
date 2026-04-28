import {Component, signal} from '@angular/core';
import {Currency} from './currency';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = signal(false);

  changeCurrency(currency: Currency): void {
    // TODO
    this.showItems.set(false);
  }
}
