import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StationService } from '../../services/station.service';
import { Station } from '../../models/station.interface';

@Component({
  selector: 'app-station-detail',
  standalone: true,
  imports: [],
  templateUrl: './station-detail.component.html',
  styleUrl: './station-detail.component.css',
})
export class StationDetailComponent implements OnInit{

  route = inject(ActivatedRoute);
  stationService:StationService = inject(StationService);

  station: Station | undefined;

  ngOnInit(){
    let idUrl =  parseInt(this.route.snapshot.paramMap.get('id') ?? "-1");
    //Ajouter des vérifs pour éviter les requetes inutiles
    console.log(idUrl,typeof idUrl);
    //Récuperer depuis mes DATAS la Station ciblée par son ID
    this.station = this.stationService.getById(idUrl);

  }

  // ngOnInit(): void {
  //   // ID présent dans l'url
  //   let urlId: string | null = this.route.snapshot.paramMap.get('id');

  //   //Si l'id existe dans l'url ( not null )
  //   if (urlId) {
  //     // recupérer la valeur numérique de urlId
  //     this.stationId = parseInt(urlId);

  //     //Si stationId ne contient pas une valeur numérique
  //     if (isNaN(this.stationId)) {
  //       //Redirection /home ou composant représentant page 404
  //       this.router.navigate(['/home']);
  //       // Ou customisation HTML
  //     }

  //   }

  // }

}
