import {Component, inject} from '@angular/core';
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {httpResource} from "@angular/common/http";
import {LicensePlateService} from "./license-plate.service";
import {LicensePlateComponent} from "./license-plate/license-plate.component";
import {LicensePlate} from "./license-plate";
import {CheckoutFormComponent} from "./checkout-form/checkout-form.component";

@Component({
  selector: 'app-root',
  imports: [
    JumbotronComponent,
    NavigationComponent,
    LicensePlateComponent,
    CheckoutFormComponent
  ],
  templateUrl: "app.component.html"
})
export class AppComponent {

  // CONTAINER COMPONENT - NOT REUSABLE - SCREEN / PAGE / AWARE OF WHAT WE'RE DOING HERE

  licensePlates = inject(LicensePlateService).licensePlates;

  addToCart(plate: LicensePlate) {
    alert("Plate added to cart! ");
    // TODO
  }

}
