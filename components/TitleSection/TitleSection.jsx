import css from "../../styles/TitleSection.module.css";
import { environments } from "../../utilities/globalConstants";

const TitleSection = ({ apiName, apiStatus, setEnvironment }) => {
  return (
    <div className={css["record-head-container"]}>
      <span className={css["api-status-tag"]}>{apiStatus}</span>
      <span className={css["title-container"]}>
        <h1 className={css["api-title"]}>{apiName}</h1>
        <span id={css["environment-selection"]}>
          {Object.values(environments).map((env) => {
            return (
              <button className={css["environment-button"]} onClick={() => setEnvironment(env)}>
                {env}
              </button>
            );
          })}
        </span>
      </span>
    </div>
  );
};

export default TitleSection;
