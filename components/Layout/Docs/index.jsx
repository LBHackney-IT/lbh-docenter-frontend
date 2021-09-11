import Header from "../Header";
import MainSidebar from "../Sidebar/MainSidebar";
import TableOfContents from "../Sidebar/TableOfContents";
import css from "./index.module.css";
import apiContent from "./apiContent.module.css";

// Makes me realise that this is no so much a layout, as it's a page.
// It's because the only thing that changes within is the text content
// and not a sub-layout. Will change it into what it is later.
const DocsLayout = ({ children, navAPIsList, tocSections }) => (
  <>
    <div className={css.docsPage}>
      <Header serviceName="Connected Documentation" />
      <div className={css.docsPageContent}>
        <MainSidebar navbarItems={navAPIsList} />
        <main className={apiContent.apiItemDocsContainer}>
          <div className={apiContent.row}>
            <div className={`${apiContent.col} ${apiContent.col3of4}`}>{children}</div>
            <div className={`${apiContent.col} ${apiContent.col1of4}`}>
              <TableOfContents tocItems={tocSections} />
            </div>
          </div>
        </main>
      </div>
    </div>
  </>
);

export default DocsLayout;
