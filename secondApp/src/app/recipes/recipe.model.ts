import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: String;
    public desc: String;
    public imgPath: String;
    public ingredients: Ingredient[];

    constructor(name: String, desc: String, imgPath: String, ingredients: Ingredient[]) {
        this.name = name;
        this.desc = desc;
        this.imgPath = imgPath;
        this.ingredients = ingredients;
    }
}