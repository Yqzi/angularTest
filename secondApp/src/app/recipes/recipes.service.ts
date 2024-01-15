import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('test', 'lest', 'https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png', [
            new Ingredient('meat', 500),
            new Ingredient('fire', 500),
        ]),
        new Recipe('test2', 'lest2', 'https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png', [
            new Ingredient('seat', 5100),
            new Ingredient('feet', 5300),

        ]),
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}