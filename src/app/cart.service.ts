import { toSignal } from '@angular/core/rxjs-interop';
import {Injectable, signal, Signal} from '@angular/core';
import {Observable} from 'rxjs';
import {LicensePlate} from './license-plate';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  readonly cartContents = signal<LicensePlate[]>([]);

  constructor(private http: HttpClient) { }

  getCartContents(): Signal<LicensePlate[]> {
    this.http.get<LicensePlate[]>('http://localhost:8000/cart')
      .pipe()
      .subscribe(
         data => this.cartContents.set(data)
    );
    return this.cartContents;
  }

  addToCart(plate: LicensePlate): Signal<LicensePlate[]> {
    this.http.put('http://localhost:8000/cart/' + plate._id, null).subscribe(
      () => this.getCartContents()
    );
    return this.cartContents
  }

  removeFromCart(plate: LicensePlate): Signal<LicensePlate[]> {
     this.http.delete('http://localhost:8000/cart/' + plate._id).subscribe(
        () => this.getCartContents()
     );
     return this.cartContents;
  }

}
