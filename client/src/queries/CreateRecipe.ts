import { gql } from "@apollo/client";

export default gql`
  mutation Mutation($name: String!, $description: String!, $duration: Int!) {
    createRecipe(name: $name, description: $description, duration: $duration) {
      id
      name
      description
      duration
    }
  }
`;
