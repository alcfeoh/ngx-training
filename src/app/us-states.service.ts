import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';

export interface UsState {
  name: string;
  abbreviation: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsStatesService {

  private http = inject(HttpClient);

  getUsStatesList(): Signal<UsState[]> {
    return toSignal(this.http.get<UsState[]>("http://localhost:8000/states"), 
                      {initialValue: []}
                    );
  }
}
