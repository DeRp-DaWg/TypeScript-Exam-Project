import Recipe from "../models/recipeModel";
import Ingredient from "../models/ingredientModel";
import Category from "../models/categoryModel";
export default {
    recipe: async (_parent:never, { id }:{id:String}) => await Recipe.findById(id).populate('ingredients'),
    recipes: async ()=> await Recipe.find({}).populate('ingredients'),
    ingredient: async (_parent:never, { id }:{id:String}) => await Ingredient.findById(id),
    ingredients: async ()=> await Ingredient.find({}),
    category: async (_parent:never, { id }:{id:String}) => await Category.findById(id).populate('recipes'),
    categories: async ()=> await Category.find({}).populate('recipes'),
}
