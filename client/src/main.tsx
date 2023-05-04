import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Index from './routes/Index'
import RecipePage from './routes/RecipePage'
import Root from './routes/Root'
import SearchResultsPage from './routes/SearchResultsPage'
import RecipeLoader from "./loaders/RecipeLoader"
import IndexLoader from "./loaders/IndexLoader"
import SearchLoader from "./loaders/SearchLoader"

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
        path: "search",
        loader: SearchLoader,
        element: <SearchResultsPage/>
      },
      {
        path: "search/:tagIds",
        loader: SearchLoader,
        element: <SearchResultsPage/>
      }
    ]
  }
],
{
  basename: ""
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}/>
)
