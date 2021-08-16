import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | any;
  index: number | undefined;

  constructor(private slService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.index = +params.id;
      this.recipe = this.recipeService.getRecipe(this.index);
    });
  }

  onAddToShoppingList(): void {
    this.slService.addIngredients(this.recipe.ingredients);
  }

}
