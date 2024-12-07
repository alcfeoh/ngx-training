import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private now = new Date();

  getTodaysDate(): Date {
    return this.now;
  }
}
