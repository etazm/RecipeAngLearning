import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | any;
  index?: number;

  constructor(private slService: ShoppingListService, private recipeService: RecipeService,
              private route: ActivatedRoute, private router: Router) {
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

  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe(this.index || 0);
    this.router.navigate(['/recipes']);
  }
}
