const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

const eventsList = {
  items: [
    {
      id: 1,
      startAt: today,
      endAt: today,
      title: 'Meeting Today',
      description: 'Super important.',
      status: 'none',
    },
    {
      id: 2,
      startAt: tomorrow,
      endAt: tomorrow,
      title: 'Harrison',
      description: 'Special notes',
      type: 'commercial',
      status: 'template',
      sqft: '500',
      sqftConfirm: 'true',
      templateStart: '4',
      templateEnd: '6',
      templateConfirm: 'true',
    },
    {
      id: 3,
      startAt: yesterday,
      endAt: yesterday,
      title: 'Craft',
      description: 'Text',
      status: 'template',
      sqft: '5',
      templateStart: '2',
      templateEnd: '4',
      templateConfirm: 'true',
      installStart: '4',
      installEnd: '6',
      installConfirm: 'true',
    },
    {
      id: 4,
      startAt: tomorrow,
      endAt: tomorrow,
      title: 'Murphy',
      description: 'Drive link',
      status: 'install',
      sqft: '50',
      templateStart: '10',
      templateEnd: '12',
      templateConfirm: 'false',
    },
    {
      id: 5,
      startAt: yesterday,
      endAt: tomorrow,
      title: 'Canpos',
      description: 'Google link',
      status: 'service',
      sqft: '7',
      templateStart: '5',
      templateEnd: '6',
    },
    {
      id: 6,
      startAt: yesterday,
      endAt: yesterday,
      title: 'Cruise',
      description: 'Text',
      status: 'install',
      sqft: '5',
      templateStart: '2',
      templateEnd: '4',
      templateConfirm: 'true',
      installStart: '4',
      installEnd: '6',
      installConfirm: 'false',
    },
  ],
};

export default eventsList;

// title
// type
// status
// sqft

// customer
// -name
// -phone
// -email

// Job
// -contact
// -phone
// -location

// Template
// -confirm
// -start
// -end

// Install
// -confirm
// -start
// -end

// balance collected
//description

// const { ApolloServer, gql } = require('apollo-server');
// const { GraphQLScalarType, Kind } = require('graphql');
// const { name, address, date } = require('faker/locale/en');
// const faker = require('faker/locale/en');

// const random_boolean = () => (Math.random() < 0.5 ? true : false);
// const random_category = () =>
//   Math.random() < 0.5 ? 'RESIDENTIAL' : 'COMMERCIAL';

// faker.seed(123);

// const typeDefs = gql`
//   scalar Date

//   enum Category {
//     RESIDENTIAL
//     COMMERCIAL
//   }

//   type Project {
//     id: ID!
//     title: String!
//     category: Category!
//     created_at: Date!
//     updated_at: Date
//     templated: Boolean
//     templateDate: Date
//     fabricated: Boolean
//     fabricateDate: Date
//     installed: Boolean
//     installDate: Date
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     projects: [Project]
//   }
// `;

// const dateScalar = new GraphQLScalarType({
//   name: 'Date',
//   description: 'Date custom scalar type',
//   serialize(value) {
//     return value.getTime(); // Convert outgoing Date to integer for JSON
//   },
//   parseValue(value) {
//     return new Date(value); // Convert incoming integer to Date
//   },
//   parseLiteral(ast) {
//     if (ast.kind === Kind.INT) {
//       return parseInt(ast.value, 10); // Convert hard-coded AST string to type expected by parseValue
//     }
//     return null; // Invalid hard-coded value (not an integer)
//   },
// });

// const projects = [
//   {
//     title: 'Monticello',
//     category: 'RESIDENTIAL',
//     created_at: Date,
//     updated_at: null,
//     templated: true,
//     templateDate: Date,
//     fabricated: false,
//     fabricateDate: Date,
//     installed: false,
//     installDate: Date,
//   },
//   {
//     title: address.streetName(),
//     category: random_category,
//     created_at: date.past(),
//     updated_at: date.past(),
//     templated: random_boolean,
//     templateDate: date.past(),
//     fabricated: random_boolean,
//     fabricateDate: date.future(),
//     installed: random_boolean,
//     installDate: date.future(),
//   },
//   {
//     title: address.streetName(),
//     category: random_category,
//     created_at: date.past(),
//     updated_at: date.past(),
//     templated: random_boolean,
//     templateDate: date.past(),
//     fabricated: random_boolean,
//     fabricateDate: date.future(),
//     installed: random_boolean,
//     installDate: date.future(),
//   },
//   {
//     title: address.streetName(),
//     category: random_category,
//     created_at: date.past(),
//     updated_at: date.past(),
//     templated: random_boolean,
//     templateDate: date.past(),
//     fabricated: random_boolean,
//     fabricateDate: date.future(),
//     installed: random_boolean,
//     installDate: date.future(),
//   },
//   {
//     title: address.streetName(),
//     category: random_category,
//     created_at: date.past(),
//     updated_at: date.past(),
//     templated: random_boolean,
//     templateDate: date.past(),
//     fabricated: random_boolean,
//     fabricateDate: date.future(),
//     installed: random_boolean,
//     installDate: date.future(),
//   },
// ];

// const resolvers = {
//   Query: {
//     projects: () => projects,
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
