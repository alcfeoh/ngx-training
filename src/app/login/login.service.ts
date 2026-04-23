import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly isUserLoggedIn = signal(false);
  readonly currentUser = signal<string | undefined>(undefined);
  readonly authToken = signal<string | undefined>(undefined);
 private http = inject(HttpClient);

  login(username: string, password: string): Observable<{token: string}> {
    return this.http.put<{token: string}>('http://localhost:8000/login', {username, password})
      .pipe(
        tap(data => {
          this.currentUser.set(username);
          this.isUserLoggedIn.set(true);
          this.authToken.set(data.token);
        })
      );
  }
}
