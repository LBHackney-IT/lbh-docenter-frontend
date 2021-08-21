// import scss from "./index.module.scss";
import css from "../../../styles/MainSidebar.module.css";
import HackneyLogo from "../Header/HackneyLogo";

const MainSidebar = ({}) => (
  <aside className={css.sidebarWrapper}>
    <div className={css.sidebar}>
      <a href="/" className={css.sidebarLogo}>
        <div className={css.pointlessContainer}>
          <HackneyLogo withinHeader={false} />
          <p className={css.sidebarServiceName}>Connected Documentation</p>
        </div>
      </a>
      <nav className={css.apiSelection}>
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
);

export default MainSidebar;
