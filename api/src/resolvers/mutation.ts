import { ObjectId, Schema, Types} from 'mongoose';
import Recipe from "../models/recipeModel";
import Ingredient from "../models/ingredientModel";
import Category from "../models/categoryModel";
import { RecipeType, RecipeTypeDocument, IngredientType, IngredientTypeDocument, CategoryType, CategoryTypeDocument } from '../types';
export default {
  createRecipe: async (_parent: never, { name, description, duration, imgURL }: RecipeTypeDocument) => {
    const newRecipe = new Recipe({ name, description, duration, imgURL });
    await newRecipe.save();
    return newRecipe;
  },
  
  deleteRecipe: async (_parent:never, { id }: RecipeTypeDocument) => {
    const result = await Recipe.findByIdAndDelete(id);
    return result ? true : false;
  },
  
  updateRecipe: async (_parent:never, { id, name, description, duration, imgURL }: RecipeTypeDocument) => {
    const result = await Recipe.findByIdAndUpdate(id, {name, description, duration, imgURL}, {new: true});
    return result;
  },
  
  createIngredient: async (_parent: never, { name, amount, measurement }: IngredientTypeDocument) => {
    const newIngredient = new Ingredient({ name, amount, measurement });
    await newIngredient.save();
    return newIngredient;
  },
  
  deleteIngredient: async (_parent:never, { id }: IngredientTypeDocument) => {
    const result = await Ingredient.findByIdAndDelete(id);
    return result ? true : false;
  },
  
  createCategory: async (_parent: never, { name }: CategoryTypeDocument) => {
    const newCategory = new Category({ name });
    await newCategory.save();
    return newCategory;
  },
  
  addIngredientToRecipe: async (
    _parent: never,
    { recipeId, ingredientId }: { recipeId: string, ingredientId: string }
  ) => {
    try {
      const recipe : RecipeTypeDocument | null = await Recipe.findById(recipeId).populate('ingredients');
      const ingredient : IngredientTypeDocument | null = await Ingredient.findById(ingredientId);
      if (!recipe) { throw new Error(`Recipe with ID ${recipeId} not found.`); }
      if (!ingredient) { throw new Error(`Ingredient with ID ${ingredientId} not found.`); }
      if (recipe.ingredients.some((r: any) => r.id === recipeId)) {
        throw new Error(`Recipe with ID ${recipeId} is already associated with ingredient with ID ${ingredientId}.`);
      }
      recipe.ingredients.push(ingredient._id);
      await recipe.save();
      return true;
    } catch (error) {
      console.error(error);
      // return null;
      return false;
    }
  },
  
  removeIngredientFromRecipe: async (
    _parent: never,
    { recipeId, ingredientId }: { recipeId: string, ingredientId: string }
  ) => {
    try {
      const recipe = await Recipe.findOneAndUpdate(
        { _id: recipeId },
        { $pull: { ingredients: ingredientId } },
        { new: true }
      );
      const ingredient = await Ingredient.findById(ingredientId)
      if (!recipe || !ingredient) {
        throw new Error('Recipe or ingredient not found.');
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  
  addInstructionToRecipe: async (
    _parent: never,
    { recipeId, instruction }: { recipeId: string, instruction: string }
  ) => {
    try {
      const recipe : RecipeTypeDocument | null = await Recipe.findById(recipeId).populate("instructions");
      if (!recipe) { throw new Error(`Recipe with ID ${recipeId} not found.`); }
      recipe.instructions.push(instruction);
      recipe.save();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  
  updateInstructionsFromRecipe: async (
    _parent: never,
    { recipeId, instructions }: { recipeId: string, instructions: [string]}
  ) => {
    try {
      const result = await Recipe.findByIdAndUpdate(recipeId, {instructions});
      return true;
    } catch (error) {
      console.error(error)
      return false;
    }
  },
  
  updateIngredientsFromRecipe: async (
    _parent: never,
    { recipeId, ingredients }: { recipeId: string, ingredients: IngredientType[]}
  ) => {
    try {
      const recipe : RecipeTypeDocument | null = await Recipe.findById(recipeId)
      if (!recipe) { throw new Error(`Recipe with ID ${recipeId} not found.`); };
            
      recipe.ingredients = []
      
      for (const ingredient of ingredients) {
        const newIngredient: IngredientTypeDocument = new Ingredient(ingredient);
        await newIngredient.save();
        recipe.ingredients.push(newIngredient._id)
      }
      
      await recipe.save()
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  },
  
  addRecipeToCategory: async (
    _parent: never,
    { recipeId, categoryId }: { recipeId: string, categoryId: string }
  ) => {
    try {
      const recipe : RecipeTypeDocument | null = await Recipe.findById(recipeId);
      const category : CategoryTypeDocument | null = await Category.findById(categoryId).populate("recipes");
      if (!recipe) { throw new Error(`Recipe with ID ${recipeId} not found.`); };
      if (!category) { throw new Error(`Category with ID ${categoryId} not found.`); };
      category.recipes.push(recipe);
      await category.save();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
};

