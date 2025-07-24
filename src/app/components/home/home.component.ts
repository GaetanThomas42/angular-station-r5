import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Station } from '../../models/station.interface';
import { StationService } from '../../services/station.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  stationService: StationService = inject(StationService);

  introText : string = "bienvenue dans mon cours";
  stations: Array<Station> = [];

  ngOnInit(): void {
    this.stations = this.stationService.getAll();
  }




}
