import { Document } from 'mongoose';

type RecipeType = {
    name: string
    description: string
    duration: number
    imgURL: string
    ingredients: IngredientType[]
    instructions: string[]
};

type IngredientType = {
    name: string
    amount: number
    measurement: string
};

type CategoryType = {
    name: string
    imgURL: string
    recipes: RecipeType[]
};

interface RecipeTypeDocument extends RecipeType, Document {};
interface IngredientTypeDocument extends IngredientType, Document {};
interface CategoryTypeDocument extends CategoryType, Document {};

export type { RecipeType, RecipeTypeDocument, IngredientType, IngredientTypeDocument, CategoryType, CategoryTypeDocument };
