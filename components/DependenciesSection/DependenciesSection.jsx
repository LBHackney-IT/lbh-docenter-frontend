import css from "../../styles/DependenciesSection.module.css";

const DependenciesSection = ({ dependencies }) => {
  const dbDependency = dependencies?.databases[0];
  const endpoints = dbDependency?.endpointsUsingIt;
  console.log(dbDependency);

  return (
    <div className="dependencies-section">
      <h2>Dependencies</h2>
      <div className={css["database-dependencies-container"]}>
        <h3>Databases</h3>
        <div className={css["database-dependency"]}>
          <h4>Database Info:</h4>
          <div className={css["names-row"]}>
            <dl className={css["key-val-pair"]}>
              <dt>Name:</dt>
              <dd>{dbDependency.name}</dd>
            </dl>
            <dl className={css["key-val-pair"]}>
              <dt>Alt-name:</dt>
              <dd>{dbDependency.technicalName}</dd>
            </dl>
          </div>
          <div className={css["database-info"]}>
            <dl className={css["key-val-pair"]}>
              <dt>Type:</dt>
              <dd>{dbDependency.type}</dd>
            </dl>
            <dl className={css["key-val-pair"]}>
              <dt>Hosted at:</dt>
              <dd>{dbDependency.hostedAt}</dd>
            </dl>
          </div>
          <div className={css["endpoints-using-db-container"]}>
            <h4>Endpoints using database:</h4>
            <table className={css["endpoints-using-db"]}>
              <thead>
                {/* <tr>
                  <th>Endpoints using database:</th>
                </tr> */}
                <tr>
                  <th>Http method</th>
                  <th>Path</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint, i) => {
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
        </div>
      </div>
    </div>
  );
};

export default DependenciesSection;
