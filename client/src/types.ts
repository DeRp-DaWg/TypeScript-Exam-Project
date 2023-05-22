type RecipeType = {
    id?: string
    name: string
    description: string
    duration: number
    imgURL?: string
    ingredients: IngredientType[]
    instructions: string[]
};

type IngredientType = {
    id?: string
    name: string
    amount: number
    measurement: string
};

type CategoryType = {
    id?: string
    name: string
    imgURL: string
    recipes: RecipeType[]
};

export type { RecipeType, IngredientType, CategoryType };
