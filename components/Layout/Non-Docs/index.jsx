import Header from "../Header";
import css from "../../../styles/Home.module.css";

const NonDocsLayout = ({ children }) => (
  <>
    <Header serviceName="Connected Documentation" />

    <div className="govuk-width-container app-width-container">
      <main className={`govuk-main-wrapper app-main-class ${css["content-block"]}`} id="content" role="main">
        {children}
      </main>
    </div>
  </>
);

export default NonDocsLayout;
