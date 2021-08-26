import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  // @ts-ignore
  private igChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number): void {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangedSubscription.unsubscribe();
  }

}
