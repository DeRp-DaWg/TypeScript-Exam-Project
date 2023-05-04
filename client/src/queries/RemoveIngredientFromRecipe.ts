import { gql } from "@apollo/client";

export default gql`
  mutation RemoveIngredientFromRecipe($recipeId: ID!, $ingredientId: ID!) {
    removeIngredientFromRecipe(recipeId: $recipeId, ingredientId: $ingredientId)
  }
`;
