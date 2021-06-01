import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  chosenRecipe: Recipe | boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showRecipeDetails(recipe: any) {
    this.chosenRecipe = recipe;
  }

}
