import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CurrencyService} from '../currency.service';
import {AsyncPipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  imports: [CurrencyPipe, AsyncPipe],
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {

  @Input()
  plate!: LicensePlate;

  @Input()
  buttonText!: string;

  @Output()
  buttonClicked = new EventEmitter<LicensePlate>();

  private currencyService = inject(CurrencyService);
  protected currency$ = this.currencyService.getCurrency();
  protected exchangeRate$ = this.currencyService.getExchangeRate();

}
