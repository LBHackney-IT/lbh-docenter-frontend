import css from "../../styles/DependenciesSection.module.css";
import DatabaseDependency from "./DatabaseDependency/DatabaseDependency";

const DependenciesSection = ({ dependencies }) => {
  const anyDependencies = Object.keys(dependencies).length < 1;

  return (
    <div id="toc-dependencies" className="dependencies-section">
      <h2>Dependencies</h2>
      {dependencies?.databases && (
        <div className={css["database-dependencies-container"]}>
          <h3 id="toc-databases">Databases</h3>
          {dependencies.databases.map((db, index) => (
            <DatabaseDependency key={index} database={db} extraClass={css["db-item"]} />
          ))}
        </div>
      )}
      {anyDependencies && <p>No dependencies were detected or manually provided.</p>}
    </div>
  );
};

export default DependenciesSection;
