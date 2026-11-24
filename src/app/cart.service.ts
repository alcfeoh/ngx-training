import {inject, Service} from '@angular/core';
import {lastValueFrom} from 'rxjs';
import {LicensePlate} from './license-plate';
import {HttpClient} from '@angular/common/http';
import {injectMutation, injectQuery, QueryClient} from '@tanstack/angular-query';

@Service()
export class CartService {

  private readonly http = inject(HttpClient);
  private readonly queryClient = inject(QueryClient);

  readonly cartQuery = injectQuery(() => ({
    queryKey: ['cart'],
    queryFn: () => lastValueFrom(this.http.get<LicensePlate[]>('http://localhost:8000/cart')),
  }));

  readonly addToCartMutation = injectMutation(() => ({
    mutationFn: (plate: LicensePlate) =>
      lastValueFrom(this.http.put('http://localhost:8000/cart/' + plate._id, null)),
    onSuccess: () => this.queryClient.invalidateQueries({queryKey: ['cart']}),
  }));

  readonly removeFromCartMutation = injectMutation(() => ({
    mutationFn: (plate: LicensePlate) =>
      lastValueFrom(this.http.delete('http://localhost:8000/cart/' + plate._id)),
    onSuccess: () => this.queryClient.invalidateQueries({queryKey: ['cart']}),
  }));
}
