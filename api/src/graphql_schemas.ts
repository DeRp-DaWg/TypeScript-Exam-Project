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
  createRecipe(name: String!, description: String!, duration: Int!): Recipe
  deleteRecipe(id: ID!): Boolean
  updateRecipe(id: ID!, name: String!, description: String!, duration: Int!): Recipe
  createIngredient(name: String!, amount: Int!, measurement: String!): Ingredient
  deleteIngredient(id: ID!): Boolean
  createCategory(name: String!): Category
  addIngredientToRecipe(recipeId: ID!, ingredientId: ID!): Boolean
  removeIngredientFromRecipe(recipeId: ID!, ingredientId: ID!): Boolean
  addInstructionToRecipe(recipeId: ID!, instruction: String!): Boolean
}
`;

export default typeDefs;