import { Component, Input } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector: 'app-recipes2',
    templateUrl: './recipes2.component.html'
})
export class Recipes2Component {

    @Input() recipes: Recipe;

}