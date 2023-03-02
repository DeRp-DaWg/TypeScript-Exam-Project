import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Index from './routes/Index'
import RecipePage from './routes/RecipePage'
import Root from './routes/Root'
import SearchResultsPage from './routes/SearchResultsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Index/>
      },
      {
        path: "recipe:recipeId",
        element: <RecipePage/>
      },
      {
        path: "search",
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
