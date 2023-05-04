import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Index from './routes/Index'
import RecipePage from './routes/RecipePage'
import CategoryPage from './routes/CategoryPage'
import Root from './routes/Root'
import SearchResultsPage from './routes/SearchResultsPage'
import RecipeLoader from "./loaders/RecipeLoader"
import IndexLoader from "./loaders/IndexLoader"
import CategoryLoader from "./loaders/CategoryLoader"

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache(),
// }); 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        loader: IndexLoader,
        element: <Index/>
      },
      {
        path: "recipe/:recipeId",
        loader: RecipeLoader,
        element: <RecipePage/>
      },
      {
        path: "category/:categoryId",
        loader: CategoryLoader,
        element: <CategoryPage/>
      }
      // {
      //   path: "search",
      //   loader: SearchLoader,
      //   element: <SearchResultsPage/>
      // },
      // {
      //   path: "search/:tagIds",
      //   loader: SearchLoader,
      //   element: <SearchResultsPage/>
      // }
    ]
  }
],
{
  basename: ""
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}/>
  // <BrowserRouter>
  //   <ApolloProvider client={client}>
  //     <Root />
  //   </ApolloProvider>
  // </BrowserRouter>,
)
