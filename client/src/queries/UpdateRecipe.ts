import { gql } from "@apollo/client";

export default gql`
  mutation UpdateRecipe($updateRecipeId: ID!, $name: String!, $description: String!, $duration: Int!) {
    updateRecipe(id: $updateRecipeId, name: $name, description: $description, duration: $duration) {
      
    }
  }
`;
