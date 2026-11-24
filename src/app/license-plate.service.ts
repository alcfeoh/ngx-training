import { inject, Service} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LicensePlate} from "./license-plate";
import {injectQuery} from "@tanstack/angular-query";
import {lastValueFrom} from "rxjs";

@Service()
export class LicensePlateService {

  private readonly http = inject(HttpClient);

  readonly licensePlatesQuery = injectQuery(() => ({
    queryKey: ['licensePlates'],
    queryFn: () => lastValueFrom(this.http.get<LicensePlate[]>("http://localhost:8000/data")),
  }))

}
