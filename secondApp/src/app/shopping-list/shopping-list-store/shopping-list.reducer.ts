import { createReducer } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

const initialState = {
    ingredients: [
        new Ingredient('Apples', 12),
        new Ingredient('bananas', 100),
    ]
};

// START HERE
export const shoppingListReducer = createReducer(
    initialState,
    on('ADD_INGREDIENT', (state, action) => {
        ingredients: [...state.ingredients, action]
    })
);