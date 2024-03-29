import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";
import { RecipeService } from "./recipes.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {
    constructor(private dsService: DataStorageService, private recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.recipeService.getRecipes();

        if (recipes.length === 0) {
            return this.dsService.fetchRecipes();
        } return recipes;
    }
}