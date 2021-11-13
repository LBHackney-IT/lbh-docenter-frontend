import css from "../../../styles/DatabaseDependency.module.css";

const DatabaseDependency = ({ database, extraClass }) => {
  const displayNamesSection = !!(database.name || database.technicalName);
  const displayEndpointsSection = !!database?.endpointsUsingIt;

  return (
    <div id={`toc-${database.technicalName.toLowerCase()}`} className={`${css["database-dependency"]} ${extraClass}`}>
      <h4>Database Info:</h4>
      {displayNamesSection && (
        <div className={css["names-row"]}>
          <dl className={css["key-val-pair"]}>
            <dt>Name:</dt>
            <dd>{database.name ?? "Not provided"}</dd>
          </dl>
          <dl className={css["key-val-pair"]}>
            <dt>Alt-name:</dt>
            <dd>{database.technicalName ?? "Not provided"}</dd>
          </dl>
        </div>
      )}
      <div className={css["database-info"]}>
        <dl className={css["key-val-pair"]}>
          <dt>Type:</dt>
          <dd>{database.type ?? "Not provided"}</dd>
        </dl>
        <dl className={css["key-val-pair"]}>
          <dt>Hosted at:</dt>
          <dd>{database.hostedAt ?? "Not provided"}</dd>
        </dl>
      </div>
      {displayEndpointsSection && (
        <div className={css["endpoints-using-db-container"]}>
          <h4>Endpoints using database:</h4>
          <table className={css["endpoints-using-db"]}>
            <thead>
              <tr>
                <th>Http method</th>
                <th>Path</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {database.endpointsUsingIt.map((endpoint, i) => {
                return (
                  <tr key={i}>
                    <td>{endpoint.httpMethod}</td>
                    <td>{endpoint.path}</td>
                    <td>{endpoint.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DatabaseDependency;
