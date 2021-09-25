import wrapEndpoint from "../../../data/abstract/endpointWrapper";
import Response from "../../../data/abstract/httpResponses";

export default wrapEndpoint(async ({ headers }) => {
  const apiBaseUrl = process.env.API_BASE_URL;
  const apiCallResponse = await fetch(`${apiBaseUrl}/apis`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  if (apiCallResponse.ok) {
    const apisList = await Promise.resolve(apiCallResponse.json());
    return Response.ok(apisList);
  } else {
    const errMsg = "Error happened while retrieving API Records List";
    console.log(errMsg, apiCallResponse.status);
    return Response.internalServerError();
  }
});
