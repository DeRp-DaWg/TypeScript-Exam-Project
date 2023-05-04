type RecipeType = {
    name: string
    description: string
    duration: number
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
    recipes: RecipeType[]
};

export type { RecipeType, IngredientType, CategoryType };
