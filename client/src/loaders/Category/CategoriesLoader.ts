import { gql, useQuery } from "@apollo/client";
import { CategoryType } from "../../types";
import ApolloClientProvider from "../../ApolloClientProvider";

// type params = {
//   recipeId: number
// }

export default async function loader({params}: any) {
  const client = ApolloClientProvider;
  
  const query = gql`
    query Categories {
      categories {
        id
        name
        recipes {
          id
          name
          description
          imgURL
        }
      }
    }
  `;
  
  const result = await client.query({query: query});
  const categories = result.data.categories as CategoryType[];
  console.log(categories)
  return {categories}
}
