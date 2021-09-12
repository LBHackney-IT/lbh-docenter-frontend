import css from "../../styles/UrlsSection.module.css";
const { copyToClipboard } = require("../../utilities/globalStateUtils");

const UrlsSection = ({ baseUrl, environment, githubUrl }) => {
  const environmentKey = environment.toLowerCase();
  return (
    <table className={css["project-urls-table"]}>
      <tbody>
        <tr>
          <th>Github url:</th>
          <td className={css["url-cell"]}>{githubUrl ?? "Not provided"}</td>
          <td className={css["clipboard-button-cell"]}>
            <button className={css["clipboard-button"]} onClick={copyToClipboard}>
              Copy
            </button>
          </td>
        </tr>
        <tr>
          <th>{environment}:</th>
          <td className={css["url-cell"]}>{baseUrl[environmentKey] ?? "Not provided"}</td>
          <td className={css["clipboard-button-cell"]}>
            <button className={css["clipboard-button"]} onClick={copyToClipboard}>
              Copy
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UrlsSection;
