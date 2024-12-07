import { Component, inject, OnDestroy } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { UsStatesService } from '../us-states.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  usStates = inject(UsStatesService).getUsStatesList();
  private http = inject(HttpClient);

  logForm(value: object): void {
    console.log(value);
    this.http.post("http://localhost:8000/checkout", value)
    .subscribe(() => alert("Checkout successful"))
  }


}
