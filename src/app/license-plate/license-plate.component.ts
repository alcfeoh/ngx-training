import {Component, inject, input, output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CurrencyService} from '../currency.service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  imports: [CurrencyPipe],
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {

  readonly plate = input.required<LicensePlate>();

  readonly buttonText = input.required<string>();

  readonly buttonClicked = output<LicensePlate>();

  private currencyService = inject(CurrencyService);
  protected currency = this.currencyService.getCurrency();
  protected exchangeRate = this.currencyService.getExchangeRate();

}
