import DocsLayout from "../../components/Layout/Docs";
import Loading from "../../components/Loading/Loading";
import useSWR from "swr";
import css from "../../styles/APIDocsIndex.module.css";

const { queryAPIsList } = require("../../data/accessMethods");

export default function APIDoc() {
  const { data: navbarList, error: navbarListError } = useSWR(["/apis"], queryAPIsList);

  const tocItems = [{ name: "Page description", idName: "toc-page-description" }, { name: "API signal", idName: "toc-api-signal" }, { name: "API Relationships", idName: "toc-relationship"}]

  const apisList = navbarList?.map(api => {
    // make a request to healthcheck or swagger check
    // need access to base url
    // could be done smarter with promises
    const status = "unknown"
    return { name: api.name, status: status };
  });

  return (
    <DocsLayout navAPIsList={navbarList} tocSections={tocItems}>
      {/* Not sure yet if there's any point to having this container tempObject && tempObject.map(node => )*/}
      <article className="sectionsContainer">
        {/* Empty marker*/}
        <h1>API docs page</h1>
        <h2 id="toc-page-description" className={css["section-title"]}>Page description</h2>
        <p className={css["paragraph-text"]}>
          This page is used for displaying of the Hackney's .NET C# APIs' Swagger generated schema information, every API's base url and link to its Github page, as well as dependency datbases and their related endpoints.
        </p>
        {
          navbarList && navbarList.length > 0 && (
            <>
              <h2 id="toc-api-signal" className={css["section-title"]}>API signal</h2>
              <p className={css["paragraph-text"]}>
                Check the availability status of the APIs registered with the Docenter service:
              </p>
              <div className={css["table-container"]}>
                <table className={css["status-table"]}>
                  <thead>
                    <tr>
                      <th>API name</th>
                      <th colSpan="2">Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      apisList.map(api => {
                        return (
                        <tr>
                          <td>{api.name}</td>
                          <td>{api.status}</td>
                          <td>
                            <span className={css[`status-icon-${api.status}`]}> </span>
                          </td>
                        </tr>);
                      })
                    }
                  </tbody>
                </table>
              </div>
            </>
          )
        }
        <h2 id="toc-relationship">API Relationships</h2>
        <p className={css["paragraph-text"]}>
          See the API relationship graph displaying how the registered with docenter apis are linked together. 
        </p>
        <p className={css["paragraph-text"]}>
          This feature is not yet implemented. To implement this feature, either manual data management needs to be introduced, or an automated way of finding and identifying the referenced dependency api base urls needs to be implemented.
        </p>
        {/* Empty marker*/}
      </article>
    </DocsLayout>
  );
}
