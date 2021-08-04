import css from "./index.module.scss";
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
    <div className={`govuk-header__container govuk-width-container ${css["lbh-header__container"]}`}>
      <div className="govuk-header__logo">
        <span className={`govuk-header__logotype ${css["lbh-header__logotype"]}`}>
          <HackneyLogo />
        </span>
        <span className="lbh-header__service-name">{serviceName}</span>
      </div>
      <div className="govuk-header__content">
        <nav className="lbh-header__links">
          {navlinks && (
            <>
              {navlinks.map(({ name, path }) => (
                <Link href={path} key={path}>
                  <a className="govuk-header__link">{name}</a>
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
