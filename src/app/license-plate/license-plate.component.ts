import {Component, input} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {Currency} from '../currency-switcher/currency';
import {CurrencyPipe} from '@angular/common';
import {CurrencyInfo} from '../currency.service';

@Component({
  selector: 'app-license-plate',
  standalone: true,
  templateUrl: './license-plate.component.html',
  imports: [
    CurrencyPipe
  ],
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {
  // Signal-based component
  plate = input.required<LicensePlate>();

  buttonText = input("");

  currencyInfo = input.required<CurrencyInfo>();

}
