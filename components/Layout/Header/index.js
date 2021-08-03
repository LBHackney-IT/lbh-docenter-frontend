import css from "./index.module.scss";

const Header = ({ serviceName }) => (
  <header className="govuk-header" role="banner" data-module="govuk-header">
    <div className={`govuk-header__container govuk-width-container ${css["lbh-header__container"]}`}>
      <div className="govuk-header__logo">Logo Will be Here</div>
      <div className="govuk-header__content">
        <a href="/" className="govuk-header__link govuk-header__link--service-name">
          {serviceName}
        </a>
      </div>
    </div>
  </header>
);

export default Header;
