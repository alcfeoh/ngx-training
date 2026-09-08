import {Component, signal} from '@angular/core';
import {FormGroup, FormsModule} from '@angular/forms';
import {form, FormField, pattern, required} from "@angular/forms/signals";

@Component({
  selector: 'app-checkout-form',
  imports: [FormsModule, FormField],
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  formModel = signal({
    firstName: '',
    lastName: '',
    city: '',
    zip: '',
    street: ''
  });

  checkoutForm = form(this.formModel, (path) => {
    required(path.lastName, {message: "Last name is requried"})
  });

  logForm(value: object): void {
    console.log(value);
  }
}
