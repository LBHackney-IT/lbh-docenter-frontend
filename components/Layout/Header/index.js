import scss from "./index.module.scss";
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
  <header className="govuk-header" role="banner" data-module="govuk-header">
    <div id={`${scss["lbh-header__container"]}`} className={` govuk-width-container`}>
      <div id={scss.headerLogoAndText}>
        <a href="/" className={css.lbhHeaderTitleLink}>
          <span>
            <span className={`govuk-header__logotype ${scss["lbh-header__logotype"]}`}>
              <HackneyLogo />
            </span>
            <span className={css.lbhHeaderServiceName}>{serviceName}</span>
          </span>
        </a>
      </div>
      <div id={scss.headerNavLinks}>
        <nav className={css.lbhHeaderLinks}>
          {navlinks && (
            <>
              {navlinks.map(({ name, path }) => (
                <Link href={path} key={path}>
                  <a className={css.lbhHeaderLinksAnchor}>{name}</a>
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
