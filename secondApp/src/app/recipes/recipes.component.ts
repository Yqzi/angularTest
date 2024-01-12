import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  recipes2: Recipe[] = [
    new Recipe('test', 'lest', 'https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png'),
    new Recipe('test2', 'lest2', 'https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png'),
  ];
}
