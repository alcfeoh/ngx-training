import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";

/**
 * This interceptor automatically adds the token header needed by our backend API
 * if such token is present in the current state of the application.
 */
export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const loginService = inject(LoginService);
  console.log('INTERCEPTOR');
  const token = loginService.getAuthToken();
  let newHeaders = req.headers;
  if (token) {
    newHeaders = newHeaders.append('authtoken', token);
  }
  const authReq = req.clone({ headers: newHeaders });
  return next(authReq);
}
