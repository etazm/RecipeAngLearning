import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {RecipeComponent} from './components/recipe/recipe.component';
import {RecipeStartComponent} from './components/recipe/recipe-start/recipe-start.component';
import {RecipeDetailsComponent} from './components/recipe/recipe-details/recipe-details.component';
import {RecipeEditComponent} from './components/recipe/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipeComponent, children: [
      {path: '', component: RecipeStartComponent, pathMatch: 'full'},
      {path: 'create', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
