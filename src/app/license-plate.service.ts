import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";
import {LicensePlate} from "./license-plate";

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  private http = inject(HttpClient);
  readonly plates = toSignal(
    this.http.get<LicensePlate[]>("https://lp-store-server.vercel.app/data"),
    {initialValue: []}
  );
}
