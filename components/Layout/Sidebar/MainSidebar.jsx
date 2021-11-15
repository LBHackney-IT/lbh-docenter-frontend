import css from "../../../styles/MainSidebar.module.css";
import HackneyLogo from "../Header/HackneyLogo";
import Link from "next/link";

const MainSidebar = ({ navbarItems, activeMainMenuItem }) => {
  return (
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
            <li className={css["main-menu-item"]}>
            <Link href={"/api-docs"}>
                <a className={activeMainMenuItem == "api-docs" ? css["selected-menu-item"] : ""}>API documentation</a>
            </Link>
          </li>
          {navbarItems?.map((item) => (
              <li className={css["main-menu-item"]} key={item.id}>
              <Link as={`/api-docs/${item.id}`} href="/api-docs/[id]">
                  <a className={activeMainMenuItem == item.id ? css["selected-menu-item"] : ""}>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </aside>
);
}

export default MainSidebar;
