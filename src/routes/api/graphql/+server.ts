import type { RequestEvent } from "@sveltejs/kit"
import { createSchema, createYoga, mergeSchemas } from "graphql-yoga"
import { printSchema } from 'graphql'
import { remultGraphql } from "remult/graphql"
import { writeFile } from 'node:fs/promises'
import { entities } from "../../../shared"

const { typeDefs, resolvers } = remultGraphql({
  entities: entities,
  removeComments: false,
})

const schema = mergeSchemas({
  schemas: [
              // remult Schema
      createSchema({
          typeDefs,
          resolvers,
      }),
              // things to extend the schema
      // projectViewSchema,
  ],
})

await writeFile('schema.graphql', printSchema(schema))

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