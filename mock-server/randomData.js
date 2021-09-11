const { theOnlyRealRecord, testAPIRecords } = require("./testData");
const {
  APIRecord,
  Environments,
  Dependencies,
  DependencyDatabase,
  DependencyAPI,
  Endpoint,
  DependencyScript,
  OtherDocumentation,
} = require("./dataModels");

const faker = require("faker");
const randexp = require("randexp").randexp;

faker.locale = "en";

const nItems = (n, itemProducer, ...args) => [...Array(n)].map((_) => itemProducer(...args));
const randInt = (mn, mx) => faker.datatype.number({ min: mn, max: mx });

function createRandomAPIRecord(mockServerPort) {
  return new APIRecord({
    name: faker.random.words(randInt(3, 5)),
    githubId: randInt(10 ** 9, 10 ** 10 - 1),
    baseUrl: new Environments({
      // swagger/index.html
      staging: "https://dr03nduqxh.execute-api.eu-west-2.amazonaws.com/staging/", //`localhost:${mockServerPort}/mock-endpoint/${randexp(/[^\W_]{12}/)}/`,
    }),
    githubUrl: "https://github.com/LBHackney-IT/social-care-case-viewer-api",
    dependencies: new Dependencies({
      apis: nItems(
        randInt(1, 3),
        () =>
          new DependencyAPI({
            apiId: randexp(/[^\W_]{8}/),
            apiName: `${faker.lorem.words(randInt(1, 3))} API`,
            endpointsUsingIt: nItems(
              randInt(1, 3),
              () =>
                new Endpoint({
                  httpMethod: randexp(/GET|POST|PATCH|DELETE|UPDATE|OPTIONS/),
                  name: faker.lorem.words(randInt(1, 3)),
                })
            ),
          })
      ),
      scripts: faker.datatype.boolean()
        ? null
        : nItems(
            randInt(1, 2),
            () =>
              new DependencyScript({
                name: faker.lorem.words(randInt(2, 5)),
                description: faker.lorem.sentence(),
              })
          ),
      databases: nItems(randInt(1, 4), () => {
        const randName = faker.lorem.words(randInt(2, 4));
        return new DependencyDatabase({
          name: randName,
          technicalName: randName.replace(" ", "_") + "_DB",
          type: randexp(/MongoDB|Airtable|S3 Bucket|DynamoDB|PostgreSQL|TSQL/),
          hostedAt: randexp(/AWS|GCP|Airtable|On-premises/) + faker.lorem.word(),
        });
      }),
    }),
    status: "ACTIVE",
    otherDocumentation: new OtherDocumentation({
      businessContext: faker.lorem.paragraph(),
      // though, likely I'd expect md markup
      dataModel: faker.internet.url(),
    }),
  });
}

const generateData =
  process.env.DOCENTER_TESTS === "1"
    ? () => ({ apiRecords: testAPIRecords })
    : (quantity, mockServerPort = 3001) => ({
        apiRecords: [theOnlyRealRecord].concat(nItems(quantity, createRandomAPIRecord, mockServerPort)),
      });

module.exports = {
  generateData,
};
