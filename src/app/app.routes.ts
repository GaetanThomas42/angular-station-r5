import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StationDetailComponent } from './components/station-detail/station-detail.component';

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
    path: 'station-detail/:id',
    component: StationDetailComponent
  },
  {
    path: '**', // Route wildcard pour 404
    redirectTo: 'home', // redirection a la route "home"
    //component: NotFoundComponent <- composant a créer pour affiche rune 404
  },
];
