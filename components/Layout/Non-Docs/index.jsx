import Header from "../Header";

const NonDocsLayout = ({ children }) => (
  <>
    <Header serviceName="Connected Documentation" />

    <div className="govuk-width-container app-width-container">
      <main className="govuk-main-wrapper app-main-class" id="content" role="main">
        {children}
      </main>
    </div>
  </>
);

export default NonDocsLayout;