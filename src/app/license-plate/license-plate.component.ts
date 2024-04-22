import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {LicensePlate} from '../license-plate';

@Component({
  selector: 'app-license-plate',
  standalone: true,
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicensePlateComponent {

  plate = input.required<LicensePlate>();

  buttonText = input<string>();

  buttonClicked = output<LicensePlate>();

}
