import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Description For the Recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('A Second Recipe', 'A Long Ass', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('A Test Recipe 22', 'Long For the Recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
