import NonDocsLayout from "../../components/Layout/Non-Docs";
import DocsLayout from "../../components/Layout/Docs";
import Loading from "../../components/Loading/Loading";
import React, { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

// temp import before I set-up data fetching
// const { theOnlyRealRecord: record } = require("../../mock-server/testData");
const { queryAPIRecord, queryAPIsList } = require("../../data/accessMethods");

export default function APIDoc() {
  const router = useRouter();
  const { id } = router.query;

  // const id = "lbGpbACv";
  const { data: singleAPI, error: singleAPIError } = useSWR(["/apis/", id], queryAPIRecord);
  const { data: navbarList, error: navbarListError } = useSWR(["/apis"], queryAPIsList);

  const tocItems = [...Array(10).keys()].map((num) => {
    return { name: `Section ${num}` };
  });

  return (
    <DocsLayout navAPIsList={navbarList} tocSections={tocItems}>
      {/* Not sure yet if there's any point to having this container tempObject && tempObject.map(node => )*/}
      <article className="sectionsContainer">
        {/* Empty marker*/}
        {singleAPI ? (
          <>
            <div className="record-head-container">
              <div className="api-status">{singleAPI?.status}</div>
              <h1 className="api-title" style={{ marginTop: "0" }}>
                {singleAPI?.name}
              </h1>
              <span className="environment-selection">
                <button>Development</button>
                <button>Staging</button>
                <button>Production</button>
              </span>
            </div>
            <div class="description-section">
              <p>{singleAPI?.otherDocumentation.businessContext}</p>
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
                  src={`${singleAPI?.baseUrl.staging}swagger/index.html`}
                  style={{ width: "100%", height: "420px" }}
                >
                  <p>Your browser does not support iframes.</p>
                </iframe>
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
        {/* Empty marker*/}
      </article>
    </DocsLayout>
  );
}
