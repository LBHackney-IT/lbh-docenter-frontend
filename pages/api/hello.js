import wrapEndpoint from "../../data/abstract/endpointWrapper";
import Response from "../../data/abstract/httpResponses";

export default wrapEndpoint(() => {
  return Response.ok({
    uzo: "hello!",
  });
});
