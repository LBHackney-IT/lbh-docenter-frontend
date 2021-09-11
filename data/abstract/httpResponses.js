export default class Response {
  constructor({ statusCode, body, headers = {} }) {
    this.statusCode = statusCode;
    this.body = body;
    this.headers = headers;
  }

  json(payload) {
    if (payload) {
      this.body = JSON.stringify(payload);
      this.headers["content-type"] = "application/json";
    }

    return this;
  }

  static ok(payload) {
    return new Response({ statusCode: 200 }).json(payload);
  }

  static created(payload) {
    return new Response({ statusCode: 201 }).json(payload);
  }

  static noContent() {
    return new Response({ statusCode: 204 });
  }

  static badRequest({ errors }) {
    return new Response({ statusCode: 400 }).json({ errors });
  }

  static notAllowed() {
    return new Response({ statusCode: 405 });
  }

  static internalServerError() {
    return new Response({ statusCode: 500 });
  }
}
