import { gql } from "@apollo/client";

export default gql`
  mutation DeleteIngredient($deleteIngredientId: ID!) {
    deleteIngredient(id: $deleteIngredientId)
  }
`;
