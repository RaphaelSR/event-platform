import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/claevbs280ccn01t9ft5jgwbt/master',
    cache: new InMemoryCache()
})