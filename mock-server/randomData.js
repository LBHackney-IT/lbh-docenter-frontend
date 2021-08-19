const {
  APIRecord,
  Environments,
  Dependencies,
  DependencyDatabase,
  DependencyAPI,
  Endpoint,
  DependencyScript,
} = require("./dataModels");

const faker = require("faker");
const randexp = require("randexp").randexp;

faker.locale = "en";

// create 1 semi-real as that's the only data I've got currently
const theOnlyRealRecord = new APIRecord({
  baseUrl: new Environments({
    // swagger/index.html
    staging: "https://dr03nduqxh.execute-api.eu-west-2.amazonaws.com/staging/",
  }),
  githubUrl: "https://github.com/LBHackney-IT/social-care-case-viewer-api",
  dependencies: new Dependencies({
    apis: [
      new DependencyAPI({
        apiId: randexp(/[^\W_]{8}/),
        apiName: "Residents Social Care Platform API",
        endpointsUsingIt: [
          new Endpoint({
            httpMethod: "GET",
            name: "Historic Visits",
          }),
          new Endpoint({
            httpMethod: "GET",
            name: "Historic Case Notes",
          }),
          new Endpoint({
            httpMethod: "GET",
            name: "Cases",
          }),
          new Endpoint({
            httpMethod: "POST",
            name: "Cases",
          }),
        ],
      }),
    ],
    scripts: [
      new DependencyScript({
        name: "MongoDB Import Lambda",
        description: "Lambda function that retrieves exported QLik Analytics data from AWS S3 bucket.",
      }),
    ],
    databases: [
      new DependencyDatabase({
        name: "Social Care Case Viewing",
        technicalName: "SCCV_MONGO_DB",
        type: "MongoDB",
        hostedAt: "AWS DocumentDB",
        // "AWS AccountName1 EC2 instances",
      }),
      new DependencyDatabase({
        name: "irrelevant",
        technicalName: "who_knows",
        type: "PostgreSQL",
        hostedAt: "AWS RDS Postgresql",
        // maybe it would be useful to have: AWS service
      }),
    ],
  }),
  status: "ACTIVE",
});

// TODO: Generate endpoints programatically

const nItems = (n, itemProducer, ...args) => [...Array(n)].map((_) => itemProducer(...args));
const randInt = (mn, mx) => faker.datatype.number({ min: mn, max: mx });

function createRandomAPIRecord(mockServerPort) {
  return new APIRecord({
    baseUrl: new Environments({
      // swagger/index.html
      staging: `localhost:${mockServerPort}/mock-endpoint/${randexp(/[^\W_]{12}/)}/`,
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
        new DependencyDatabase({
          name: randName,
          technicalName: randName.replace(" ", "_") + "_DB",
          type: randexp(/MongoDB|Airtable|S3 Bucket|DynamoDB|PostgreSQL|TSQL/),
          hostedAt: randexp(/AWS|GCP|Airtable|On-premises/) + faker.lorem.word(),
        });
      }),
    }),
    status: "ACTIVE",
  });
}

const generateData = (quantity, mockServerPort = 3001) => ({
  apiRecords: [theOnlyRealRecord].concat(nItems(quantity, createRandomAPIRecord, mockServerPort)),
});

module.exports = {
  generateData,
};
