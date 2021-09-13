import css from "../../styles/DependenciesSection.module.css";
import DatabaseDependency from "./DatabaseDependency/DatabaseDependency";

const DependenciesSection = ({ dependencies }) => {
  const dbDependency = dependencies?.databases[0];

  return (
    <div className="dependencies-section">
      <h2>Dependencies</h2>
      <div className={css["database-dependencies-container"]}>
        <h3>Databases</h3>
        {dependencies.databases.map((db) => (
          <DatabaseDependency database={db} extraClass={css["db-item"]} />
        ))}
      </div>
    </div>
  );
};

export default DependenciesSection;
