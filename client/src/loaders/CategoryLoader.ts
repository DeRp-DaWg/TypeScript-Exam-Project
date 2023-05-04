import { gql, useQuery } from "@apollo/client";
import { CategoryType } from "../types";
import ApolloClientProvider from "../ApolloClientProvider";

// type params = {
//   recipeId: number
// }

export default async function loader({params}: any) {
  const client = ApolloClientProvider;
  
  const query = gql`
    query Category($categoryId: ID) {
      category(id: $categoryId) {
        name
        recipes {
          id
          name
          description
          duration
        }
      }
    }
  `;
  
  const result = await client.query({query: query, variables: { categoryId: params.categoryId }});
  const category = result.data.category as CategoryType;
  console.log(category)
  return {category}
}
