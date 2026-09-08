import {computed, Service} from '@angular/core';
import {httpResource} from "@angular/common/http";
import {LicensePlate} from "./license-plate";

@Service()
export class LicensePlateService {

  readonly licensePlates = httpResource<LicensePlate[]>(() => "http://localhost:8000/data");

}
