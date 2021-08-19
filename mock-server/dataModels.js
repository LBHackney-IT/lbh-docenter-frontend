import { randexp } from "randexp/types";

export class APIRecord {
  constructor({ baseUrl, githubUrl, dependencies, status, otherDocumentation }) {
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
  constructor({ development, staging, production }) {
    this.development = development;
    this.staging = staging;
    this.production = production;
  }
}

export class Dependencies {
  constructor({ apis, scripts, databases, packages }) {
    this.apis = apis || [];
    this.scripts = scripts || [];
    this.databases = databases || [];
    this.packages = packages || [];
  }
}

export class OtherDocumentation {
  constructor({ businessContext, dataModel }) {
    this.businessContext = businessContext;
    this.dataModel = dataModel;
  }
}
// I wonder if this could just be replaced by giving list of paths to certain /docs/*.md files

// Dependency Models

// Ideally you'd have people listing what endpoints
// are using what APIs, but that might be pushing it.

// I wonder if the API Id can be extrapolated from
// data provided :/
export class DependencyAPI {
  constructor({ apiId, apiName, endpointsUsingIt }) {
    this.apiId = apiId;
    this.apiName = apiName;
    this.endpointsUsingIt = endpointsUsingIt || [];
  }
}

export class DependencyScript {
  constructor({ name, githubUrl, description }) {
    this.name = name;
    this.githubUrl = githubUrl;
    this.description = description;
  }
}

export class DependencyDatabase {
  constructor({ name, type, hostedAt, technicalName }) {
    this.name = name;
    // How it's called within AWS, Google Cloud, Airtable, or onPrem server
    this.technicalName = technicalName;
    this.type = type;
    this.hostedAt = hostedAt;
    // Should I include endpointsUsingIt? Sounds useful
  }
}

// Dependency Database Endpoint, hence not a lot of detail
export class Endpoint {
  constructor({ httpMethod, name }) {
    this.httpMethod = httpMethod;
    this.name = name; // Could be a dropdown once I start parsing swagger json
  }
}
