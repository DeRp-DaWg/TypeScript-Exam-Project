import { gql, useQuery } from "@apollo/client";
import { RecipeType } from "../types";
import ApolloClientProvider from "../ApolloClientProvider";

// type params = {
//   recipeId: number
// }

export default async function loader({params}: any) {
  const client = ApolloClientProvider;
  
  const query = gql`
    query Recipe($recipeId: ID) {
      recipe(id: $recipeId) {
        id
        name
        description
        duration
        ingredients {
          id
          name
          amount
          measurement
        }
        instructions
      }
    }
  `;
  
  const result = await client.query({query: query, variables: { recipeId: params.recipeId }});
  const recipe = result.data.recipe as RecipeType;
  return {recipe}
}
