import { Component } from '@angular/core';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";
import {LicensePlate} from "./license-plate";
import {HelloComponent} from "./hello/hello.component";

@Component({
    selector: 'app-root',
    imports: [HelloComponent],
    template: `
      <app-hello></app-hello>
  `
})
export class AppComponent {
  licensePlates: LicensePlate[] = LICENSE_PLATES;
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
}
