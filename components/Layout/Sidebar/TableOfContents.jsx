import css from "../../../styles/TOCSidebar.module.css";

const TableOfContents = ({}) => (
  <div className={css.toc}>
    <div className={css.tocBorder}>
      <p>Toc</p>
      <ul
        style={{
          color: "blue",
          listStyleType: "none",
        }}
      >
        {[...Array(10).keys()].map((num) => (
          <li key={num}>
            <a href="#">Section {num}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TableOfContents;
