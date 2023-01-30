import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  
  // cocktails:Cocktail[] = this.cocktailService.getCocktails();

constructor(private cocktailService:CocktailService) { }

cocktails: Cocktail[] = [];


ngOnInit(): void {
  this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
    this.cocktails = cocktailsFromJsonFile;
    console.log(this.cocktails);
  });

}
}
