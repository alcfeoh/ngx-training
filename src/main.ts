import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query';
import { withDevtools } from '@tanstack/angular-query-devtools';

bootstrapApplication(AppComponent, {...appConfig, providers: [provideZoneChangeDetection(), ...appConfig.providers, provideTanStackQuery(() => new QueryClient(), withDevtools())]})
  .catch((err) => console.error(err));
