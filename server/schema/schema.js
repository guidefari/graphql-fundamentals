const graphql = require("graphql")
let _ = require("lodash")

let usersData = [
  { id: "1", name: "Bond", age: 36, profession: "Programmer" },
  { id: "13", name: "Anna", age: 26, profession: "Baker" },
  { id: "211", name: "Bella", age: 16, profession: "Mechanic" },
  { id: "19", name: "Gina", age: 26, profession: "Painter" },
  { id: "150", name: "Georgina", age: 36, profession: "Teacher" },
]

// let hobbiesData = [
//     {id: '1', title: 'Programming', description: 'Using computers to make the world a better place', userId: '150'},
//     {id: '2', title: 'Rowing', description: 'Sweat and feel better before eating donouts', userId: '211'},
//     {id: '3', title: 'Swimming', description: 'Get in the water and learn to become the water', userId: '211'},
//     {id: '4', title: 'Fencing', description: 'A hobby for fency people', userId: '13'},
//     {id: '5', title: 'Hiking', description: 'Wear hiking boots and explore the world', userId: '150'},
// ];

// let postsData = [
//     {id: '1', comment: 'Building a Mind', userId: '1'},
//     {id: '2', comment: 'GraphQL is Amazing', userId: '1'},
//     {id: '3', comment: 'How to Change the World', userId: '19'},
//     {id: '4', comment: 'How to Change the World', userId: '211'},
//     {id: '5', comment: 'How to Change the World', userId: '1'}
// ]

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
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    profession: { type: GraphQLString },
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
      args: { id: { type: GraphQLString } },

      resolve(parent, args) {
        //   we resolve with data
        // get and return data from a datasource
        return _.find(usersData, { id: args.id })
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
