import Header from "../Header";
import MainSidebar from "../Sidebar/MainSidebar";
import css from "./index.module.css";
import apiContent from "./apiContent.module.css";

const DocsLayout = ({ children }) => (
  <>
    <div className={css.docsPage}>
      <Header serviceName="Connected Documentation" />
      <div className={css.docsPageContent}>
        <MainSidebar />
        <main className={apiContent.apiItemDocsContainer}>
          <div className={apiContent.row}>
            <div className={`${apiContent.col} ${apiContent.col3of4}`}>{children}</div>
            <div className={`${apiContent.col} ${apiContent.col1of4}`}>
              <div className={apiContent.toc}>
                <div className={apiContent.tocBorder}>
                  <p>Toc</p>
                  <ul
                    style={{
                      color: "blue",
                      listStyleType: "none",
                    }}
                  >
                    {[...Array(10).keys()].map((num) => (
                      <li key={num}>
                        <a href="#">Section {num}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </>
);

export default DocsLayout;
