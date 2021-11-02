import HttpStatusError from "./customErrors";

const concatUrl = (baseUrl, relPath) => {
  const baseEndsWithSlash = baseUrl[baseUrl.length - 1] === "/";
  const relStartsWithSlash = relPath[0] === "/";
  const isSlashNeeded = !baseEndsWithSlash && !relStartsWithSlash;
  return `${baseUrl}${isSlashNeeded ? "/" : ""}${relPath}`;
};

//token,
async function request(relPath, { ...options }) {
  console.log("We hit ", relPath);
  const serverSideAPIUrl = "/api"; //process.env.NEXT_PUBLIC_API_URL;
  const url = concatUrl(serverSideAPIUrl, relPath);
  console.info(`Fetching ${url}`, options?.body);
  const response = await fetch(url, {
    ...options,
    credentials: "same-origin",
    headers: {
      accept: "application/json",
      //   authorization: token ? `Bearer ${token}` : undefined,
      "content-type": "application/json",
      //   cookie: `hackneyToken=${token}`,
    },
    body: options?.body ? JSON.stringify(options.body) : null,
  });

  if (response.ok) {
    return response.json();
  } else {
    console.error(`Fetching ${url} failed`, response.status);
    throw new HttpStatusError(response.status);
  }
}

// options, , ...options
export function queryAPIRecord(relPath, id) {
  return request(concatUrl(relPath, id), { method: "GET" });
}

export function queryAPIsList(path) {
  return request(path, { method: "GET" });
}

module.exports = {
  request,
  queryAPIRecord,
  queryAPIsList,
};
