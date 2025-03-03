import {Component, inject} from '@angular/core';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import { HttpClient } from '@angular/common/http';
import {LicensePlate} from '../license-plate';
import {AsyncPipe} from '@angular/common';
import {LicensePlateComponent} from '../license-plate/license-plate.component';

@Component({
    selector: 'app-store-view',
    imports: [JumbotronComponent, AsyncPipe, LicensePlateComponent],
    templateUrl: './store-view.component.html',
    styleUrl: './store-view.component.css'
})
export class StoreViewComponent {

  http = inject(HttpClient);
  plates$ = this.http.get<LicensePlate[]>("https://lp-store-server.vercel.app/data");

}
