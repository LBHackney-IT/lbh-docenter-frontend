import css from "../../styles/UrlsSection.module.css";
const { copyUrlsSectionUrl } = require("../../utilities/globalStateUtils");

const UrlsSection = ({ baseUrl, environment, githubUrl }) => {
  const environmentKey = environment.toLowerCase();
  return (
    <div className={css["urls-section-container"]}>
      <h2>Urls</h2>
      <table className={css["project-urls-table"]}>
        <tbody>
          <tr>
            <th>Github url:</th>
            <td className={`${css["url-cell"]} url-cell`}>{githubUrl ?? "Not provided"}</td>
            <td className={css["clipboard-button-cell"]}>
              <button className={css["clipboard-button"]} onClick={copyUrlsSectionUrl}>
                Copy
              </button>
            </td>
          </tr>
          <tr>
            <th>{environment}:</th>
            <td className={`${css["url-cell"]} url-cell`}>{baseUrl[environmentKey] ?? "Not provided"}</td>
            <td className={css["clipboard-button-cell"]}>
              <button className={css["clipboard-button"]} onClick={copyUrlsSectionUrl}>
                Copy
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UrlsSection;
