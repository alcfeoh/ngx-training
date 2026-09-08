import {Component, input, output} from '@angular/core';
import {LicensePlate} from '../license-plate';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {
  // PRESENTATION COMPONENT = REUSABLE / SIMPLE / NO CONNECTION TO BUSINESS LOGIC
  plate = input.required<LicensePlate>();
  buttonText =  input<string>();
  buttonClick = output<LicensePlate>();

}
