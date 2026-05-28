import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/index.js';
import { resolvers } from './resolvers/index.js';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

const PORT = parseInt(process.env.PORT || '4000', 10);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`✅ Servidor GraphQL listo en${url}`);
console.log(`📡 Endpoint:${url}graphql`);
