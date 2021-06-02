import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  deleteIngredient(): void {
    this.ingredients.pop();
    this.ingredientsChanged.emit(this.getIngredients());
  }

  clearIngredients(): void {
    this.ingredients = [];
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
