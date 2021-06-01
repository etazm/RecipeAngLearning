import { Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: true }) nameInput!: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput!: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<Ingredient>();
  @Output() ingredientCleared = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    let ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ingredientAdded.emit(ingredient);
  }

  deleteIngredient() {
    this.ingredientDeleted.emit();
  }

  clearIngredient() {
    this.ingredientCleared.emit();
  }
}
