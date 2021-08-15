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
                {[...Array(5).keys()].map((num) => (
                  <li key={num}>API number {num}</li>
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
