import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StationComponent } from './components/station/station.component';

export const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path: 'station/:id',
    component: StationComponent
  },
  {
    path: '**',
    redirectTo: ''
  },// Route wildcard pour 404, qui redirige a la route "home"
];
