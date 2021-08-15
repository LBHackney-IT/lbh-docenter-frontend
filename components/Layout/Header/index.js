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
  <header class="lbh-header ">
    <div class="lbh-header__main">
      <div class="lbh-container lbh-header__wrapper lbh-header__wrapper--stacked">
        <div class="lbh-header__title">
          <a href="/" class="lbh-header__title-link">
            <span>
              <span className="lbh-header__logotype">
                <HackneyLogo />
              </span>
              <span className="lbh-header__service-name">{serviceName}</span>
            </span>
          </a>
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
