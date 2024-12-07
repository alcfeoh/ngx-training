import { inject, Injectable } from '@angular/core';
import { LicensePlate } from './license-plate';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  private http = inject(HttpClient);

  getList(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>("http://localhost:8000/data");
  }
}
