const { generateData } = require("./randomData");
const jsonServer = require("json-server");
const { theOnlyRealRecord } = require("./testData");

const mockServerPort = 4000;

const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  // Display json-server's built in homepage when json-server starts.
  static: "node_modules/json-server/public",
});
const inMemoryDatabase = generateData(10, mockServerPort);
const router = jsonServer.router(inMemoryDatabase);

server.use(middlewares);

const realUrl = theOnlyRealRecord.baseUrl.staging;
const fakeUrl = `/mock-endpoint/${theOnlyRealRecord.key}`;
console.log(`f: localhost:${mockServerPort}${fakeUrl}`);
server.get(fakeUrl, function (_, res) {
  // for now I only have time to a boring redirect to the same url
  res.status(302).redirect(`${realUrl}swagger/index.html`);
});

inMemoryDatabase.apiRecords.slice(1).forEach((r) => {
  console.log(r.baseUrl.staging);
  const relativeUrl = r.baseUrl.staging.split(mockServerPort)[1];
  server.get(relativeUrl, function (_, res) {
    // for now I only have time to a boring redirect to the same url
    res.status(302).redirect(`${realUrl}swagger/index.html`);
  });
});

server.use(router);

server.listen(mockServerPort, () => {
  console.log("JSON Server is running");
});
