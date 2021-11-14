import NonDocsLayout from "../../components/Layout/Non-Docs";
import DocsLayout from "../../components/Layout/Docs";
import Loading from "../../components/Loading/Loading";
import React, { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import TitleSection from "../../components/TitleSection/TitleSection";
import UrlsSection from "../../components/UrlsSection/UrlsSection";
import { environments } from "../../utilities/globalConstants";
import DependenciesSection from "../../components/DependenciesSection/DependenciesSection";

// temp import before I set-up data fetching
// const { theOnlyRealRecord: record } = require("../../mock-server/testData");
const { queryAPIRecord, queryAPIsList } = require("../../data/accessMethods");

export default function APIDoc() {
  const router = useRouter();
  const { id } = router.query;
  const [environment, setEnvironment] = useState(environments.staging);
  const [activeAPIMenuItem, setActiveAPIMenuItem] = useState("");
  const { data: singleAPI, error: singleAPIError } = useSWR(["/apis/", id], queryAPIRecord);
  const { data: navbarList, error: navbarListError } = useSWR(["/apis"], queryAPIsList);
  
  // compute Toc Sections:
  let tocStrings = [];

  if (singleAPI?.baseUrl && !!Object.keys(singleAPI.baseUrl).length) tocStrings.push({ name: "Urls", idName: "toc-urls" });
  // if (singleAPI?.otherDocumentation?.businessContext)
  tocStrings.push({ name: "Description", idName: "toc-description" });
  if (singleAPI?.baseUrl && !!Object.keys(singleAPI.baseUrl).length) tocStrings.push({ name: "Swagger Information", idName: "toc-swagger"});
  if (singleAPI?.dependencies && !!Object.keys(singleAPI.dependencies).length) {
    tocStrings.push({ name: "Dependencies", idName: "toc-dependencies" })

    // TODO: Expand on as features get added.
    if (singleAPI?.dependencies?.apis?.length) tocStrings.push({ name: "APIs", idName: "toc-apis" });
    if (singleAPI?.dependencies?.scripts?.length) tocStrings.push({ name: "Scripts", idName: "toc-scripts" });
    
    if (singleAPI?.dependencies?.databases?.length) {// && !!Object.keys(singleAPI?.dependencies?.databases).length) {
      tocStrings.push({ name: "Databases", idName: "toc-databases" });
      singleAPI?.dependencies?.databases.forEach(d => tocStrings.push({ name: d.technicalName, idName: `toc-${d.technicalName.toLowerCase()}`}));
    }

    if (singleAPI?.dependencies?.packages?.length) tocStrings.push({ name: "Packages", idName: "toc-packages" });
  };

  useEffect(() => {
    const url = window.location.pathname;
    const nameOfId = url.split('/').pop();
    setActiveAPIMenuItem(nameOfId)
  }, [singleAPI])

  return (
    <DocsLayout navAPIsList={navbarList} tocSections={tocStrings} activeMainMenuItem={activeAPIMenuItem}>
      <article className="sectionsContainer">
        {singleAPI ? (
          <>
            <TitleSection
              apiName={singleAPI.name}
              apiStatus={singleAPI.status}
              setEnvironment={setEnvironment}
              environment={environment}
            />
            <UrlsSection baseUrl={singleAPI?.baseUrl} environment={environment} githubUrl={singleAPI?.githubUrl} />
            <div id="toc-description" className="description-section">
              <h2>Description</h2>
              <p>{singleAPI?.otherDocumentation?.businessContext ?? "Description was not found or provided."}</p>
            </div>
            <div id="toc-swagger" className="swagger-section">
              <h2>Swagger Information</h2>
              <div
                className="swagger-iframe-container"
                style={{ width: "100%", paddingRight: "10px", height: "400px", overflow: "hidden" }}
              >
                <iframe
                  id="swagger-insert"
                  src={`${singleAPI?.baseUrl[environment.toLowerCase()]}swagger/index.html`}
                  style={{ width: "100%", height: "420px" }}
                >
                  <p>Your browser does not support iframes.</p>
                </iframe>
              </div>
            </div>
            <DependenciesSection dependencies={singleAPI?.dependencies} />
          </>
        ) : (
          <Loading />
        )}
      </article>
    </DocsLayout>
  );
}
