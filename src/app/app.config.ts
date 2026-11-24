import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors, withXhr} from '@angular/common/http';
import {tokenInterceptor} from "./token-http-interceptor";
import {provideTanStackQuery, QueryClient} from "@tanstack/angular-query";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withXhr(), withInterceptors([tokenInterceptor])),
    provideTanStackQuery(() => new QueryClient())
  ]
};
