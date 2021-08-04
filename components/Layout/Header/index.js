import scss from "./index.module.scss";
import css from "./index.module.css";
import HackneyLogo from "./HackneyLogo";
import Link from "next/link";

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
    <div className={`govuk-header__container govuk-width-container ${scss["lbh-header__container"]}`}>
      <a href="/" className={css.lbhHeaderTitleLink}>
        <div className={`${scss["lbh-header__logo"]}`}>
          <span className={`govuk-header__logotype ${scss["lbh-header__logotype"]}`}>
            <HackneyLogo />
          </span>
          <span className={css.lbhHeaderServiceName}>{serviceName}</span>
        </div>
      </a>
      <div className="govuk-header__content">
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
