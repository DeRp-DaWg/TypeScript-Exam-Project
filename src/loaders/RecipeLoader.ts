import { getRecipe } from "../fetchers/recipeFetcher";
import { Recipe } from "../types";

// type params = {
//   recipeId: number
// }

export default async function loader({params}: any) {
  const recipe: Recipe = await getRecipe(params.recipeId)
  return {recipe}
}
