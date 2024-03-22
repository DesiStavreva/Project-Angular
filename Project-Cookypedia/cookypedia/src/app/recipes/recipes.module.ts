import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';



@NgModule({
  declarations: [
    PostListComponent,
    CommentListComponent,
    CurrentRecipeComponent,
    AddRecipeComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
  ],
  exports: [
    MainComponent,
  ]
})
export class RecipesModule { }
