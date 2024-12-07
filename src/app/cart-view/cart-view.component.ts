import {Component, Signal} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CartService} from '../cart.service';
import {NgFor, NgIf} from '@angular/common';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import {LicensePlateComponent} from '../license-plate/license-plate.component';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [NgFor, NgIf, JumbotronComponent, LicensePlateComponent],
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cartContents: Signal<LicensePlate[]>;

  constructor(private service: CartService) {
    this.cartContents = service.getCartContents();
  }

  removeFromCart(plate: LicensePlate): void {
    this.service.removeFromCart(plate);
  }
}
