import {inject, Injectable, Signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LicensePlate} from './license-plate';
import {Observable} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  private http = inject(HttpClient);
  private licensePlates$ = this.http.get<LicensePlate[]>('http://localhost:8000/data');
  readonly licensePlates = toSignal(this.licensePlates$, {initialValue: []});

  getPlates(): Signal<LicensePlate[]> {
    return this.licensePlates;
  }

}
