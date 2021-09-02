import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  // @ts-ignore
  id: number;
  editMode = false;
  // @ts-ignore
  recipeForm: FormGroup;
  // @ts-ignore
  recipe: Recipe | null;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.recipe = (this.editMode) ? this.recipeService.getRecipe(this.id) : null;
      this.initForm();
    });
  }

  private initForm(): void {
    this.recipeForm = new FormGroup({
      name: new FormControl(this.recipe?.name, Validators.required),
      description: new FormControl(this.recipe?.description, Validators.required),
      imagePath: new FormControl(this.recipe?.imagePath, Validators.required),
      ingredients: new FormArray(this.getRecipeIngredientsControls())
    });
  }

  getRecipeIngredientsControls(): FormGroup[] {
    if (!this.editMode) {
      return [];
    }

    const recipeArray: FormGroup[] = [];
    this.recipe?.ingredients.forEach(ingredient => {
      recipeArray.push(new FormGroup({
        name: new FormControl(ingredient.name, Validators.required),
        amount: new FormControl(ingredient.amount, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
      }));
    });

    return recipeArray;
  }

  onAddIngredient(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ]),
    }));
  }

  onCancel(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number): void {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  onSubmit(): void {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  get ingredientControls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
}
