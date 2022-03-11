const graphql = require("graphql")

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql

// Create types
const UserType = new GraphQLObjectType({
  name: "User",
  description: "Is a human being. or is it?",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
})

// Root query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "This is where the tree grows from. haha",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        //   we resolve with data
        // get and return data from a datasource
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
