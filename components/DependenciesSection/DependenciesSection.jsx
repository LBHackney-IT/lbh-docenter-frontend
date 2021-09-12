import css from "../../styles/DependenciesSection.module.css";

const DependenciesSection = ({ dependencies }) => {
  const dbDependency = dependencies?.databases[0];
  //   const

  return (
    <div className="dependencies-section">
      <h2>Dependencies</h2>
      <div className={css["database-dependencies-container"]}>
        <h3>Databases</h3>
        <div className={css["database-dependency"]}>
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
        </div>
      </div>
    </div>
  );
};

export default DependenciesSection;
