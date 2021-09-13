import css from "../../../styles/DatabaseDependency.module.css";

const DatabaseDependency = ({ database, extraClass }) => {
  return (
    <div className={`${css["database-dependency"]} ${extraClass}`}>
      <h4>Database Info:</h4>
      <div className={css["names-row"]}>
        <dl className={css["key-val-pair"]}>
          <dt>Name:</dt>
          <dd>{database.name}</dd>
        </dl>
        <dl className={css["key-val-pair"]}>
          <dt>Alt-name:</dt>
          <dd>{database.technicalName}</dd>
        </dl>
      </div>
      <div className={css["database-info"]}>
        <dl className={css["key-val-pair"]}>
          <dt>Type:</dt>
          <dd>{database.type}</dd>
        </dl>
        <dl className={css["key-val-pair"]}>
          <dt>Hosted at:</dt>
          <dd>{database.hostedAt}</dd>
        </dl>
      </div>
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
            {database?.endpointsUsingIt.map((endpoint, i) => {
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
  );
};

export default DatabaseDependency;
