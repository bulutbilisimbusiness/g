import 'zone.js'; // Import Zone.js
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';
import { MoviesComponent } from './app/movies/movies.component';
import { MovieDetailComponent } from './app/movie-detail/movie-detail.component';
import { DashboardComponent } from './app/dashboard/dashboard.component'; // Import DashboardComponent

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }, // Define DashboardComponent route
  { path: 'movies', component: MoviesComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false,
      })
    ),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
