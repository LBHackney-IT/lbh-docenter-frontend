import { randexp } from "randexp/types";

export class APIRecord {
  constructor(baseUrl, githubUrl, dependencies, status, otherDocumentation) {
    this.key = randexp(/[^\W_]{8}/);
    this.baseUrl = baseUrl;
    this.githubUrl = githubUrl;
    this.dependencies = dependencies;
    // status: ACTIVE, PLANNED_DEPRECATION, DEPRECATED
    this.status = status;
    this.otherDocumentation = otherDocumentation;
  }
}

export class Environments {
  constructor(development, staging, production) {
    this.development = development;
    this.staging = staging;
    this.production = production;
  }
}

export class Dependencies {
  constructor(apis, scripts, databases, packages) {
    this.apis = apis;
    this.scripts = scripts;
    this.databases = databases;
    this.packages = packages;
  }
}

export class OtherDocumentation {
  constructor(businessContext, dataModel) {
    this.businessContext = businessContext;
    this.dataModel = dataModel;
  }
}
