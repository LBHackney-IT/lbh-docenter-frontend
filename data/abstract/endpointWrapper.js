import Response from "./httpResponses";

export default function wrapEndpoint(endpointAction) {
  return async (req, res) => {
    const forward = (response) =>
      res.writeHead(response.statusCode, { ...res.headers, ...response.headers }).end(response.body);

    try {
      const response = await endpointAction({
        body: req.body,
        headers: req.headers,
        method: req.method,
        params: req.query,
      });
      return forward(response);
    } catch (err) {
      return forward(Response.internalServerError());
    }
  };
}
