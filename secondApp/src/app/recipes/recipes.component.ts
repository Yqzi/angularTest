import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  recipes2: Recipe[] = [
    new Recipe('test', 'lest', 'https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png', [
      new Ingredient('deet', 1),
      new Ingredient('tea', 2),

    ]),
    new Recipe('test2', 'lest2', 'https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png', [
      new Ingredient('qe', 500),
      new Ingredient('le', 500),

    ]),
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
