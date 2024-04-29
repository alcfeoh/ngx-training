import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, switchMap} from 'rxjs';
import {LicensePlate} from './license-plate';
import {Apollo, gql} from 'apollo-angular';
import {map, tap} from 'rxjs/operators';

const GET_CART_CONTENTS = gql`
  {
   cart {
      _id
      description
      picture
      price
      title
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apollo = inject(Apollo);
  readonly cartContents$ = new BehaviorSubject<LicensePlate[]>([]);

  getCartContents(): Observable<LicensePlate[]> {
    return this.apollo.subscribe<{cart : LicensePlate[]}>({query: GET_CART_CONTENTS})
    .pipe(
      map(result => result.data?.cart ?? []),
      tap(res => this.cartContents$.next(res))
    );
  }

  addToCart(plate: LicensePlate): Observable<unknown> {
   const mutation =  gql`
       mutation AddToCart {
        addToCart(plateId: "${plate._id}") {
          _id
        }
      }
  `;
    return this.apollo.mutate({mutation}).pipe(switchMap(() => this.getCartContents()));
  }

  removeFromCart(plate: LicensePlate): Observable<unknown> {
    const mutation =  gql`
       mutation removeFromCart {
        removeFromCart(plateId: "${plate._id}") {
          _id
        }
      }
  `;
    return this.apollo.mutate({mutation}).pipe(switchMap(() => this.getCartContents()));
  }

}
