import wrapEndpoint from "../../../data/abstract/endpointWrapper";
import Response from "../../../data/abstract/httpResponses";

export default wrapEndpoint(async ({ params: { id }, headers }) => {
  const apiBaseUrl = process.env.API_BASE_URL;
  const apiCallResponse = await fetch(`${apiBaseUrl}/apis/${id}`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  if (apiCallResponse.ok) {
    const apiDocRecord = await Promise.resolve(apiCallResponse.json());
    return Response.ok(apiDocRecord);
  } else {
    const errMsg = "Error happened while retrieving API Record";
    console.log(errMsg, apiCallResponse.status);
    return Response.internalServerError();
  }
});
