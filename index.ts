import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({

});

async function start() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 }
  });
}

start();

console.log('Server starting on the port: ', 4001); 
