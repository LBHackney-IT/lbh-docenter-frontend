import NonDocsLayout from "../components/Layout/Non-Docs";
import DocsLayout from "../components/Layout/Docs";
import React, { useState, useCallback, useEffect } from "react";
import useSWR from "swr";

// temp import before I set-up data fetching
const { theOnlyRealRecord: record } = require("../mock-server/testData");
const { queryAPIRecord, queryAPIsList } = require("../data/accessMethods");

export default function Home() {
  const id = "lbGpbACv";
  const { data: singleAPI, error: singleAPIError } = useSWR(["/apis/", id], queryAPIRecord);
  const { data: navbarList, error: navbarListError } = useSWR(["/apis"], queryAPIsList);
  return (
    <DocsLayout>
      {/* Not sure yet if there's any point to having this container tempObject && tempObject.map(node => )*/}
      <article className="sectionsContainer">
        {/* Empty marker*/}
        <p>{singleAPI ? <em>{JSON.stringify(singleAPI)}</em> : <h1>loading</h1>}</p>
        <p>-----------------------------------------------------------------------</p>
        <p>{navbarList ? <em>{JSON.stringify(navbarList)}</em> : <h1>loading</h1>}</p>
        <div className="record-head-container">
          <div className="api-status">{record.status}</div>
          <h1 className="api-title" style={{ marginTop: "0" }}>
            {record.name}
          </h1>
          <span className="environment-selection">
            <button>Development</button>
            <button>Staging</button>
            <button>Production</button>
          </span>
        </div>
        <div class="description-section">
          <p>{record.otherDocumentation.businessContext}</p>
        </div>
        <div className="swagger-section">
          <h2>Swagger Information</h2>
          <div
            className="swagger-iframe-container"
            style={{ width: "100%", paddingRight: "10px", height: "400px", overflow: "hidden" }}
          >
            {/* "https://dr03nduqxh.execute-api.eu-west-2.amazonaws.com/staging/swagger/index.html"*/}
            <iframe
              id="swagger-insert"
              src={`${record.baseUrl.staging}swagger/index.html`}
              style={{ width: "100%", height: "420px" }}
            >
              <p>Your browser does not support iframes.</p>
            </iframe>
          </div>
        </div>
        {/* Empty marker*/}
      </article>
    </DocsLayout>
  );
}
