import wrapEndpoint from "../../../data/abstract/endpointWrapper";
import Response from "../../../data/abstract/httpResponses";

export default wrapEndpoint(async ({ headers }) => {
  const apiBaseUrl = "http://localhost:4000"; //process.env.NEXT_PUBLIC_API_URL;
  const apiCallResponse = await fetch(`${apiBaseUrl}/apis`);
  let nextServerResponseData;

  if (apiCallResponse.ok) {
    const apisList = await Promise.resolve(apiCallResponse.json());
    nextServerResponseData = { data: apisList };
  } else {
    const errMsg = "Error happened while retrieving API Records List";
    console.log(errMsg, apiCallResponse.status);
    nextServerResponseData = { data: [], error: errMsg };
  }

  return Response.ok(nextServerResponseData);
});

