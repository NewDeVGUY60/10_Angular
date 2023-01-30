import { Injectable } from '@angular/core';
import {Cocktail} from './cocktail.model';
import { Observable } from 'rxjs/internal/Observable';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {


  constructor(public http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("../assets/cocktail.json");
  }

  
  
}

// getCocktails() {
//   const blueLagoon = new Cocktail('Blue Lagoon', 45, 'https://assets.afcdn.com/recipe/20190222/88138_w1024h1024c1cx1762cy2643.webp');
//   const pinaColada = new Cocktail('Pina Colada', 40, 'https://assets.afcdn.com/recipe/20180705/80258_w1024h768c1cx974cy1535.jpg');
//   const sexOnTheBeach = new Cocktail('Sex On The Beach', 52, 'https://assets.afcdn.com/recipe/20221102/137001_w1024h1024c1cx1060cy707.webp');
//   return [blueLagoon, pinaColada, sexOnTheBeach];
// }