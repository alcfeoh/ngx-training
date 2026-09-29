import {Component, inject} from '@angular/core';
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {LicensePlateService} from "./license-plate.service";
import {LicensePlateComponent} from "./license-plate/license-plate.component";
import {LicensePlate} from "./license-plate";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-root',
  imports: [
    JumbotronComponent,
    NavigationComponent,
    LicensePlateComponent
  ],
  templateUrl: "app.component.html"
})
export class AppComponent {

  licensePlates = inject(LicensePlateService).licensePlates;
  cartService = inject(CartService);

  addToCart(plate: LicensePlate) {
    this.cartService.addToCart(plate).subscribe(() => alert("Plate added to cart! "));
  }

  reset(boundaryReset: () => void) {
    this.licensePlates.reload();
    boundaryReset();
  }

}
