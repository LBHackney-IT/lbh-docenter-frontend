// import scss from "./index.module.scss";
import css from "./index.module.css";
import HackneyLogo from "./HackneyLogo";
import Link from "next/link";

// Todo: make this a state that gets updated by authorizer based on user login status.
const navlinks = [
  {
    name: "Hackney APIs",
    path: "/hackney-apis",
  },
  {
    name: "Sign In",
    path: "/login",
  },
];

const Header = ({ serviceName }) => (
  <header className="lbh-header ">
    <div id={css["main-header"]} className="lbh-header__main">
      <div className="lbh-container lbh-header__wrapper lbh-header__wrapper--stacked">
        <div className={`lbh-header__title ${css.logoService}`}>
          <a href="/" className="lbh-header__title-link">
            <HackneyLogo />
          </a>
          <span className="lbh-header__service-name">{serviceName}</span>
        </div>
        <nav id={css.headerNavLinks} className="lbh-header__links">
          {navlinks && (
            <>
              {navlinks.map(({ name, path }) => (
                <Link href={path} key={path}>
                  <a className={css.lbhHeaderLink}>{name}</a>
                </Link>
              ))}
            </>
          )}
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
