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
		route: ActivatedRoute = inject(ActivatedRoute);
    //Injection de dépendance avec inject méthode Angular
    stationId: number| undefined;

    constructor(){
      let urlId: string | null = this.route.snapshot.paramMap.get('id');

      if(urlId){
        this.stationId = parseInt(urlId);
      }else{
        //Redirection /home
      }

    }
}
