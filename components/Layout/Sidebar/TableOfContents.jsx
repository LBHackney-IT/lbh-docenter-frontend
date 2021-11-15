import css from "../../../styles/TOCSidebar.module.css";
import Link from "next/link";

// Should go recursively as the data is nested?
// But not sure if MVP will contain that
const TableOfContents = ({ tocItems }) => {
  return (
  <div className={css.toc}>
    <div className={css.tocBorder}>
        <p>Table of Contents</p>
      <ul className={css["toc-ul"]}>
        {tocItems.map((item) => (
          <li className={css["toc-item"]} key={item.name}>
              <Link href={`#${item.idName}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};

export default TableOfContents;
