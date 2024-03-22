import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';

const routes: Routes = [
    {path: 'recipes', 
    children: [
        {path: '', pathMatch: 'full', component: MainComponent},
        {path: ':recipeId', component: CurrentRecipeComponent},
    ]},
    
    {path: 'add-recipe', component: AddRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
