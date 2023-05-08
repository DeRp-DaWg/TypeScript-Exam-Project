const typeDefs = `#graphql

type Recipe {
  id: ID!,
  name: String!,
  description: String!,
  duration: Int!,
  ingredients: [Ingredient!]!,
  instructions: [String!]!
}

type Ingredient {
  id: ID!,
  name: String!,
  amount: Int!,
  measurement: String!
}

type Category {
  id: ID!,
  name: String!,
  recipes: [Recipe!]!
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. 
type Query {
  recipe(id: ID): Recipe
  recipes: [Recipe!]!
  ingredient(id: ID): Ingredient
  ingredients: [Ingredient!]!
  category(id: ID): Category
  categories: [Category!]!
}

type Mutation {
  # Recipe CRUD
  createRecipe(name: String!, description: String!, duration: Int!): Recipe
  deleteRecipe(id: ID!): Boolean
  updateRecipe(id: ID!, name: String!, description: String!, duration: Int!): Recipe
  
  # Ingredient CRUD
  createIngredient(name: String!, amount: Int!, measurement: String!): Ingredient
  deleteIngredient(id: ID!): Boolean
  
  # Category CRUD
  createCategory(name: String!): Category
  
  # Other
  addIngredientToRecipe(recipeId: ID!, ingredientId: ID!): Boolean
  removeIngredientFromRecipe(recipeId: ID!, ingredientId: ID!): Boolean
  addInstructionToRecipe(recipeId: ID!, instruction: String!): Boolean
  addRecipeToCategory(recipeId: ID!, categoryId: ID!): Boolean
}
`;

export default typeDefs;