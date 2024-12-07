import { Component, inject } from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {  DatePipe } from '@angular/common';
import { DateService } from './date.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    RouterOutlet,
    DatePipe
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {

  now = inject(DateService).getTodaysDate();

}
