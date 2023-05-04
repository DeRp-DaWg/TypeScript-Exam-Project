import { gql } from "@apollo/client";

export default gql`
  mutation CreateIngredient($name: String!, $amount: Int!, $measurement: String!) {
    createIngredient(name: $name, amount: $amount, measurement: $measurement) {
      id
      name
      amount
      measurement
    }
  }
`;
