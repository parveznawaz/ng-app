import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Biriyani recipe1',
    'Tasty Biriyani1',
    // tslint:disable-next-line:max-line-length
    'https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/09121657/chicken-fry-biryani-recipes.jpg?ssl=1?w=356&strip=all&quality=80'),
    new Recipe('Biriyani recipe2',
    'Tasty Biriyani2',
    // tslint:disable-next-line:max-line-length
    'https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/09121657/chicken-fry-biryani-recipes.jpg?ssl=1?w=356&strip=all&quality=80'),
    new Recipe('Biriyani recipe3',
    'Tasty Biriyani3',
    // tslint:disable-next-line:max-line-length
    'https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/09121657/chicken-fry-biryani-recipes.jpg?ssl=1?w=356&strip=all&quality=80'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
