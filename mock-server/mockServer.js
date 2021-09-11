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

// I think, swagger is using X-Frame-Options header to prevent
// this from being possible
// inMemoryDatabase.apiRecords.slice(1).forEach((r) => {
//   console.log(r.baseUrl.staging);
//   const relativeUrl = r.baseUrl.staging.split(mockServerPort)[1];
//   server.get(`${relativeUrl}swagger/index.html`, function (_, res) {
//     // for now I only have time to a boring redirect to the same url
//     res.status(302).redirect(`${realUrl}swagger/index.html`);
//   });
// });

server.get("/apis", (req, res) => {
  const apisList = inMemoryDatabase.apiRecords.map((api) => {
    return {
      id: api.key,
      name: api.name,
      //type? platform/service/etc.
    };
  });

  res.status(200).json(apisList);
});

server.get("/apis/:key", (req, res) => {
  const record = inMemoryDatabase.apiRecords.find((r) => r.key === req.params.key);

  setTimeout(() => {
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).end();
    }
  }, 10);
});

server.post("/residents/:residentId/help_requests/", function (req, res, next) {
  req.url = "/help_requests";
  const residentId = parseInt(req.params.residentId);
  req.params = {};
  req.body["residentId"] = residentId;
  next();
});

server.use(router);

server.listen(mockServerPort, () => {
  console.log("JSON Server is running");
});
