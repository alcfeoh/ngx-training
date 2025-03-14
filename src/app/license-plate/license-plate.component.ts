import {Component, input} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-license-plate',
  standalone: true,
  templateUrl: './license-plate.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {

  readonly plate = input.required<LicensePlate>();

  readonly buttonText = input.required<string>();

}
