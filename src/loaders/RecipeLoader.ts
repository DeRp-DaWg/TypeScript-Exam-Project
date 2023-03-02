import { getRecipe } from "../fetchers/recipeFetcher";
import { recipe } from "../types";

// type params = {
//   recipeId: number
// }

export default async function loader({params}: any) {
  const recipe: recipe = await getRecipe(params.recipeId)
  return {recipe}
}
