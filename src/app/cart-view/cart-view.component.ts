import {Component, inject} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CartService} from '../cart.service';

import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import {LicensePlateComponent} from '../license-plate/license-plate.component';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-cart-view',
  imports: [JumbotronComponent, LicensePlateComponent, AsyncPipe],
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  private service = inject(CartService);
  cartContents$ = this.service.getCartContents();

  removeFromCart(plate: LicensePlate): void {
    // TODO
  }

}
