import {ApolloClient, InMemoryCache} from '@apollo/client'

const uri = 'https://fe-test.apalo.xyz/graphql'

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache
})

export default client