import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  //Propriété représentant l'id de la station
  stationId: number| undefined;

    constructor(){
      // ID présent dans l'url
      let urlId: string | null = this.route.snapshot.paramMap.get('id');

      //Si l'id existe dans l'url
      if(urlId){
        this.stationId = parseInt(urlId);
      }else{
        //Redirection /home
      }

    }
}
