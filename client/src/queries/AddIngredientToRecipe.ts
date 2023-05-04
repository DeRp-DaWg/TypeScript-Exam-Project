import { gql } from "@apollo/client";

export default gql`
  mutation AddIngredientToRecipe($recipeId: ID!, $ingredientId: ID!) {
    addIngredientToRecipe(recipeId: $recipeId, ingredientId: $ingredientId)
  }
`;
