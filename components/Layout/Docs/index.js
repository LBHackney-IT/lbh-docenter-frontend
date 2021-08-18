import Header from "../Header";
import HackneyLogo from "../Header/HackneyLogo";
import css from "./index.module.css";
import apiContent from "./apiContent.module.css";

const DocsLayout = ({ children }) => (
  <>
    <div className={css.docsPage}>
      <Header serviceName="Connected Documentation" />
      <div className={css.docsPageContent}>
        <aside className={css.sidebarWrapper}>
          <div className={css.sidebar}>
            <a href="/" className={css.sidebarLogo}>
              <div className={css.pointlessContainer}>
                <HackneyLogo withinHeader={false} />
                <p className={css.sidebarServiceName}>Connected Documentation</p>
              </div>
            </a>
            <nav class={css.apiSelection}>
              <ul className={css.apiNavLinksList}>
                {[...Array(25).keys()].map((num) => (
                  <li key={num}>
                    <a href="#" className={css.apiLink}>
                      API number {num}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
        <main className={apiContent.apiItemDocsContainer}>
          <div className={apiContent.row}>
            <div className={`${apiContent.col} ${apiContent.col3of4}`}>{children}</div>
            <div className={`${apiContent.col} ${apiContent.col1of4}`}>
              <div className={apiContent.toc}>
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
        </main>
      </div>
    </div>
  </>
);

export default DocsLayout;
