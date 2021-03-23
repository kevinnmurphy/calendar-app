import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
// const URI = 'https://graphql.fauna.com/graphql';

// export const apolloClient = new ApolloClient({
//   uri: URI,
//   headers: {
//     authorization: `Bearer ${process.env.REACT_APP_FAUNA_SECRET}`,
//   },
//   cache: new InMemoryCache(),
// });

// const URI = './netlify/functions/graphql';
// const URI = 'https://bookit-api.hasura.app/v1/graphql';

// export const apolloClient = new ApolloClient({
//   uri: URI,
//   cache: new InMemoryCache(),
//   withAuth: false,
// });

const URL = 'https://graphql.fauna.com/graphql';

export const apolloClient = new ApolloClient({
  uri: URL,
  fetch,
  cache: new InMemoryCache(),
  withAuth: false,
});

// const createApolloClient = (authToken) => {
//   return new ApolloClient({
//     link: new HttpLink({
//       uri: 'https://hasura.io/learn/graphql',
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     }),
//     cache: new InMemoryCache(),
//   });
// };
