import css from "../../styles/UrlsSection.module.css";

const UrlsSection = ({ baseUrl, environment, githubUrl }) => {
  const environmentKey = environment.toLowerCase();
  return (
    <table className={css["project-urls-table"]}>
      <tbody>
        <tr>
          <th>Github url:</th>
          <td>{githubUrl ?? "Not provided"}</td>
        </tr>
        <tr>
          <th>{environment}:</th>
          <td>{baseUrl[environmentKey] ?? "Not provided"}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UrlsSection;

