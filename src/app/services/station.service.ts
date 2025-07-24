import { Injectable } from '@angular/core';
import { Station } from '../models/station.interface';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  //apiUrl:string = "...."

  constructor() { }

  getAll(): Array<Station>{
    return [
    {
      id: 1,
      name: "Station 1",
      latitude: 45.7640,
      longitude: 4.8357,
      power: "2kW",
      address: "Lyon, 69001, France",
      coverImage: "https://tse3.mm.bing.net/th/id/OIP.HxJ3R1AFpa4YZx7YvyDKeQHaE7?pid=Api&P=0&w=300&h=300",
      description: "Station de recharge compacte située au cœur de Lyon.",
      instruction: "Scannez le QR code sur la borne pour commencer la charge.",
      reviews: [
        {
          author: "Jean Dupont",
          comment: "Très pratique et facile d’accès.",
          rating: 4
        },
        {
          author: "Marie Dubois",
          comment: "Un peu lente mais fonctionne bien.",
          rating: 3
        },
        {
          author: "Marie Dubois",
          comment: "Un peu lente mais fonctionne bien.",
          rating: 3
        },
      ]
    },
    {
      id: 2,
      name: "Station 2",
      latitude: 45.7655,
      longitude: 4.8444,
      power: "50kW",
      address: "Lyon, 69002, France",
      coverImage: "https://tse2.mm.bing.net/th/id/OIP.Y1PYQO24tCzytHiCXff6lAHaJ4?pid=Api&P=0&w=300&h=300",
      description: "Station rapide idéale pour les conducteurs pressés.",
      instruction: "Connectez votre véhicule et suivez les instructions à l’écran.",
      reviews: [
        { author: "Paul Martin", comment: "Charge ultra rapide, parfait !", rating: 5 },
        { author: "Sophie Leroy", comment: "Toujours de la place disponible.", rating: 4 }
      ]
    },
    {
      id: 3,
      name: "Station 3",
      latitude: 45.7633,
      longitude: 4.8314,
      power: "11kW",
      address: "Lyon, 69003, France",
      coverImage: "https://tse2.mm.bing.net/th/id/OIP.pEC3KnCSkmwFMuY7yYMdbAHaE8?pid=Api&P=0&w=300&h=300",
      description: "Station idéale pour une recharge durant vos courses.",
      instruction: "Branchez le câble et vérifiez que la LED passe au vert.",
      reviews: [
        { author: "Lucie Bernard", comment: "Emplacement pratique, mais parfois occupée.", rating: 3 },
        { author: "Julien Morel", comment: "Bonne expérience, je recommande.", rating: 4 }
      ]
    }
    ];
  }

  getById(id: number): Station | undefined {
    let stations = this.getAll()
    return stations.find(station => station.id === id);
  }


}
