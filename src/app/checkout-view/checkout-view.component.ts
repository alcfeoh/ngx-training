import { Component } from '@angular/core';
import {CartService} from '../cart.service';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import {CheckoutFormComponent} from '../checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout-view',
  imports: [JumbotronComponent, CheckoutFormComponent],
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent {

  constructor(private cartService: CartService) {

  }
}
