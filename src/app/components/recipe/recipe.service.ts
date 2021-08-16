// import {Injectable} from '@angular/core';
// import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'Description For the Recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('FrenchFries', 20)
      ]),
    new Recipe('A Second Recipe',
      'A Long Ass',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('bread', 2),
        new Ingredient('Meat', 20)
      ]),
    new Recipe('A Test Recipe 22',
      'Long For the Recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('Salad', 1),
        new Ingredient('FrenchFries', 20)
      ]),
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
