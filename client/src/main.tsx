import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Index from './routes/Index'
import RecipeRoute from './routes/Recipe/RecipeRoute'
import CategoryRoute from './routes/Category/CategoryRoute'
import Root from './routes/Root'
import SearchResultsPage from './routes/SearchResultsPage'
import RecipesLoader from "./loaders/Recipe/RecipesLoader"
import IndexLoader from "./loaders/IndexLoader"
import CategoryLoader from "./loaders/Category/CategoryLoader"
import ViewRecipesRoute from './routes/Recipe/ViewRecipesRoute';
import ViewCategoriesRoute from './routes/Category/ViewCategoriesRoute';
import CategoriesLoader from './loaders/Category/CategoriesLoader';
import RecipeLoader from './loaders/Recipe/RecipeLoader';
import ViewRecipeRoute from './routes/Recipe/ViewRecipeRoute';
import CreateCategoryRoute from './routes/Category/CreateCategoryRoute';
import CreateCategoryAction from './actions/CreateCategoryAction';
import UpdateRecipeAction from './actions/UpdateRecipeAction';
import DeleteRecipeAction from './actions/DeleteRecipeAction';
import CreateRecipeRoute from './routes/Recipe/CreateRecipeRoute';
import CreateRecipeAction from './actions/CreateRecipeAction';
import ViewCategoryRoute from './routes/Category/ViewCategoryRoute';
import UpdateRecipeRoute from './routes/Recipe/UpdateRecipeRoute';

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
        index: true,
        loader: IndexLoader,
        element: <Index/>
      },
      {
        path: "recipes",
        element: <RecipeRoute/>,
        children: [
          {
            index: true,
            loader: RecipesLoader,
            element: <ViewRecipesRoute/>
          },
          {
            path: ":recipeId",
            loader: RecipeLoader,
            element: <ViewRecipeRoute/>
          },
          {
            path: "create",
            action: CreateRecipeAction,
            element: <CreateRecipeRoute/>
          },
          {
            path: "update/:recipeId",
            loader: RecipeLoader,
            action: UpdateRecipeAction,
            element: <UpdateRecipeRoute/>
          },
          {
            path: "delete/:recipeId",
            action: DeleteRecipeAction
          }
        ]
      },
      {
        path: "categories",
        element: <CategoryRoute/>,
        children: [
          {
            index: true,
            loader: CategoriesLoader,
            element: <ViewCategoriesRoute/>
          },
          {
            path: ":categoryId",
            loader: CategoryLoader,
            element: <ViewCategoryRoute/>
          },
          {
            path: "create",
            action: CreateCategoryAction,
            element: <CreateCategoryRoute/>
          }
        ]
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
  <>
  <RouterProvider router={router}/>
  </>
  // <BrowserRouter>
  //   <ApolloProvider client={client}>
  //     <Root />
  //   </ApolloProvider>
  // </BrowserRouter>,
)
