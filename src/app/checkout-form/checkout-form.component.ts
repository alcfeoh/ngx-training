import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  imports: [FormsModule],
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  logForm(value: object): void {
    console.log(value);
  }
}
