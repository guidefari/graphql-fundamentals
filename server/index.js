const express = require("express")
const { graphqlHTTP } = require("express-graphql")

const schema = require("./schema/schema")
const app = express()

// express-graphql middlewear
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
)

app.listen(4000, () => {
  console.log("lift off")
})
