import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      "Biriyani",
      "Tasty Biriyani",
      // tslint:disable-next-line:max-line-length
      "https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/09121657/chicken-fry-biryani-recipes.jpg?ssl=1?w=356&strip=all&quality=80",
      [new Ingredient("Meat", 1), new Ingredient("Rice", 2)]
    ),
    new Recipe(
      "Burger",
      "Tasty Buger",
      // tslint:disable-next-line:max-line-length
      "http://7gigzxopz0uiqxo1-zippykid.netdna-ssl.com/wp-content/uploads/2017/05/mcdonalds.jpg",
      [new Ingredient("Wheat", 3), new Ingredient("Meat", 4)]
    ),
    new Recipe(
      "Pasta",
      "Tasty Pasta",
      // tslint:disable-next-line:max-line-length
      "https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg",
      [new Ingredient("Rice", 5), new Ingredient("Sauce", 6)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingListService(ingredients: Ingredient[]) {
    //this.shoppingListService.addIngredient(ingredients);
  }
}
