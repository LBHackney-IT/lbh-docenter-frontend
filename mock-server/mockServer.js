const { generateData } = require("./randomData");
const jsonServer = require("json-server");

const mockServerPort = 4000;

const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  // Display json-server's built in homepage when json-server starts.
  static: "node_modules/json-server/public",
});
const inMemoryDatabase = generateData(10, mockServerPort);
const router = jsonServer.router(inMemoryDatabase);

server.use(middlewares);
server.use(router);

server.listen(mockServerPort, () => {
  console.log("JSON Server is running");
});
