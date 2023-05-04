import { gql } from "@apollo/client";

export default gql`
  mutation AddInstructionToRecipe($recipeId: ID!, $instruction: String!) {
    addInstructionToRecipe(recipeId: $recipeId, instruction: $instruction)
  }
`;
