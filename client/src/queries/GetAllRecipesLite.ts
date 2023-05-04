import { gql } from "@apollo/client";

export default gql`
  mutation DeleteRecipe($deleteRecipeId: ID!) {
    deleteRecipe(id: $deleteRecipeId)
  }
`;
