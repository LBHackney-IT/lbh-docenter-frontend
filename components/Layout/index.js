import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Header serviceName="Documentation for Hackney IT Projects" />
    <div className="govuk-width-container app-width-container">
      <main className="govuk-main-wrapper app-main-class" id="content" role="main">
        {children}
      </main>
    </div>
  </>
);

export default Layout;
