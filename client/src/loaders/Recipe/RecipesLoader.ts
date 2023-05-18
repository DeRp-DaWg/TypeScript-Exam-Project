import { gql, useQuery } from "@apollo/client";
import { RecipeType } from "../../types";
import ApolloClientProvider from "../../ApolloClientProvider";

// type params = {
//   recipeId: number
// }

export default async function loader({params}: any) {
  const client = ApolloClientProvider;
  
  const query = gql`
    query Recipes {
      recipes {
        id
        name
        description
        imgURL
      }
    }
  `;
  
  const result = await client.query({query: query});
  const recipes = result.data.recipes as RecipeType[];
  return {recipes}
}
