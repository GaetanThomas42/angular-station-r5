import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [],
  templateUrl: './station.component.html',
  styleUrl: './station.component.css'
})
export class StationComponent {

  //Injection de dépendance avec inject méthode Angular
  route: ActivatedRoute = inject(ActivatedRoute);

  router: Router = inject(Router);

  //Propriété représentant l'id de la station
  stationId: number | undefined;

  constructor() {
    // ID présent dans l'url
    let urlId: string | null = this.route.snapshot.paramMap.get('id');

    //Si l'id existe dans l'url ( not null )
    if (urlId) {
      // recupérer la valeur numérique de urlId
      this.stationId = parseInt(urlId);

      //Si stationId ne contient pas une valeur numérique
      if (isNaN(this.stationId)) {
        //Redirection /home ou composant représentant page 404
        this.router.navigate(['/home']);
        // Ou customisation HTML
      }

    }

  }
}
