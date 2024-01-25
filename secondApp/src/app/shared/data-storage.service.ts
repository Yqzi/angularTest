import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}
    databaseURL: string = 'https://httptest-2ef67-default-rtdb.firebaseio.com/recipes.json';

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.databaseURL, recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
            return this.http.get<Recipe[]>(this.databaseURL).pipe( map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ?? []}
            });
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        }));
    }
}