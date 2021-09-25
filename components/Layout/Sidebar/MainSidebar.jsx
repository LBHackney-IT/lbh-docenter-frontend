import css from "../../../styles/MainSidebar.module.css";
import HackneyLogo from "../Header/HackneyLogo";
import Link from "next/link";

const MainSidebar = ({ navbarItems }) => (
  <aside className={css.sidebarWrapper}>
    <div className={css.sidebar}>
      <Link href="/">
        <a className={css.sidebarLogo}>
          <div className={css.pointlessContainer}>
            <HackneyLogo withinHeader={false} />
            <p className={css.sidebarServiceName}>Connected Documentation</p>
          </div>
        </a>
      </Link>
      <nav className={css.apiSelection}>
        <ul className={css.apiNavLinksList}>
          {navbarItems?.map((item) => (
            <li key={item.id}>
              <Link as={`/api-docs/${item.id}`} href="/api-docs/[id]">
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </aside>
);

export default MainSidebar;
