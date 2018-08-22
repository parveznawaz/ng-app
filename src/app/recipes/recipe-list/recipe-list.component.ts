import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output("recipeWasSelected") recipeWasSelected=new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Biriyani recipe1","Tasty Biriyani1","https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/09121657/chicken-fry-biryani-recipes.jpg?ssl=1?w=356&strip=all&quality=80"),
    new Recipe("Biriyani recipe2","Tasty Biriyani2","https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/09121657/chicken-fry-biryani-recipes.jpg?ssl=1?w=356&strip=all&quality=80"),
    new Recipe("Biriyani recipe3","Tasty Biriyani3","https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/09121657/chicken-fry-biryani-recipes.jpg?ssl=1?w=356&strip=all&quality=80"),
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }

}
