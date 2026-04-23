import {inject, Injectable, Resource} from '@angular/core';
import {Observable} from 'rxjs';
import {LicensePlate} from './license-plate';
import {HttpClient, httpResource, HttpResourceRef} from '@angular/common/http';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private http = inject(HttpClient);
  readonly cartContents = httpResource<LicensePlate[]>(() => 'http://localhost:8000/cart');

  addToCart(plate: LicensePlate): Observable<unknown> {
    return this.http.put('http://localhost:8000/cart/' + plate._id, null)
      .pipe(tap(() => this.cartContents.reload()));
  }

  removeFromCart(plate: LicensePlate): Observable<unknown> {
    return this.http.delete('http://localhost:8000/cart/' + plate._id)
      .pipe(tap(() => this.cartContents.reload()));
  }
}
