import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Observable, switchMap} from 'rxjs';
import {LicensePlate} from './license-plate';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly licensePlates: WritableSignal<LicensePlate[]> = signal([]);


  constructor(private http: HttpClient) { }

  getCartContents(): Signal<LicensePlate[]> {
    this.http.get<LicensePlate[]>('http://localhost:8000/cart')
      .subscribe(cartContents => this.licensePlates.set(cartContents));
    return this.licensePlates;
  }

  addToCart(plate: LicensePlate) {
    this.http.put('http://localhost:8000/cart/' + plate._id, null)
      .pipe(
        switchMap(() => this.http.get<LicensePlate[]>('http://localhost:8000/cart'))
      )
      .subscribe(cartContents => this.licensePlates.set(cartContents));
  }

  removeFromCart(plate: LicensePlate) {
    this.http.delete('http://localhost:8000/cart/' + plate._id)
      .pipe(
        switchMap(() => this.http.get<LicensePlate[]>('http://localhost:8000/cart'))
      )
      .subscribe(cartContents => this.licensePlates.set(cartContents));
  }

}
