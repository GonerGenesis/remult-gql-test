import type { RequestEvent } from "@sveltejs/kit"
import { createSchema, createYoga } from "graphql-yoga"
import { remultGraphql } from "remult/graphql"
import { entities } from "../../../shared"

const { typeDefs, resolvers } = remultGraphql({
  entities: entities
})

const yogaApp = createYoga<RequestEvent>({
  schema: createSchema({
    typeDefs,
    resolvers
  }),
  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: '/api/graphql',

  fetchAPI: { Response }
})

export { yogaApp as GET, yogaApp as OPTIONS, yogaApp as POST }