import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  chosenRecipe: Recipe | boolean = false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe) => {
      this.showRecipeDetails(recipe);
    });
  }

  showRecipeDetails(recipe: any): void {
    this.chosenRecipe = recipe;
  }

}
