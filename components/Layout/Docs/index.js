import Header from "../Header";
import css from "./index.module.css";

const DocsLayout = ({ children }) => (
  <>
    <div className={css.docsPage}>
      <Header serviceName="Connected Documentation" />
      <div className={css.docsPageContent}>
        <aside className={css.sidebarWrapper}>
          <div className={css.sidebar}>
            <a href="/" className="TODO-homeLink">
              Maybe Link
            </a>
            <nav class={css.apiSelection}>
              <ul className={css.apiNavLinksList}>
                {[...Array(15).keys()].map((num) => (
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
        <main>{children}</main>
      </div>
    </div>
  </>
);

export default DocsLayout;
