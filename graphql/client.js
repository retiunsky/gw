import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
 return {
 headers: {
      ...headers, 'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET
    }
  }
});


const httpLink = createHttpLink({
 uri: process.env.NEXT_PUBLIC_HASURA_URL,
});

export const client = new ApolloClient({
 link: authLink.concat(httpLink),
 cache: new InMemoryCache()
});
