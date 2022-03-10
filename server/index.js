const express = require("express")
const { graphqlHTTP } = require("express-graphql")

const app = express()

// express-graphql middlewear
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log("lift off")
})
