import css from "../../../styles/TOCSidebar.module.css";
import Link from "next/link";

// Should go recursively as the data is nested?
// But not sure if MVP will contain that
const TableOfContents = ({ tocItems }) => (
  <div className={css.toc}>
    <div className={css.tocBorder}>
      <p>Toc</p>
      <ul className={css["toc-ul"]}>
        {tocItems.map((item) => (
          <li className={css["toc-item"]} key={item.name}>
            <Link href={`#${item.name}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TableOfContents;
