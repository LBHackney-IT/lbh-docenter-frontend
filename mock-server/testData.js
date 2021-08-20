const randexp = require("randexp").randexp;
const {
  APIRecord,
  Environments,
  Dependencies,
  DependencyDatabase,
  DependencyAPI,
  Endpoint,
  DependencyScript,
} = require("./dataModels");

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

// for now it's just a single record.
// There will be more, once I start writing tests.
const testAPIRecords = [theOnlyRealRecord];

module.exports = {
  theOnlyRealRecord,
  testAPIRecords,
};
