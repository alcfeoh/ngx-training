import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import { UpperCasePipe } from '@angular/common';
import { CurrencyRendererPipe } from "../currency-renderer.pipe";
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-license-plate',
  standalone: true,
  imports: [UpperCasePipe, CurrencyRendererPipe],
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {

  @Input()
  plate!: LicensePlate;

  @Input()
  buttonText!: string;

  @Output()
  onButtonClick = new EventEmitter<LicensePlate>();

  currencyInfo = inject(CurrencyService).currencyInfo;

  buttonClicked(): void {
    this.onButtonClick.emit(this.plate);
  }

}
