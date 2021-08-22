import NonDocsLayout from "../components/Layout/Non-Docs";
import DocsLayout from "../components/Layout/Docs";
import HeadingN from "../components/Heading/HeadingN";

// temp import before I set-up data fetching
const { tempObject } = require("../mock-server/testData");

const getNodeKey = (level, title, markdown) => `${level}-${title}-${markdown ? markdown.length : 0}`;
// I want to keep the name docTree for descriptiveness
function markUpDocTree(docTree, level = 1) {
  const { title, markdown, sections } = docTree;
  const nodeJSX = (
    <div key={getNodeKey(level, title, markdown)} className="layeredSection">
      <HeadingN n={level}>{title}</HeadingN>
      {markdown && <p>{markdown}</p>}
      {sections && sections.map((node) => markUpDocTree(node, level + 1))}
    </div>
  );
  return nodeJSX;
}

export default function Home() {
  // console.log(tempObject);
  return (
    <DocsLayout>
      {/* Not sure yet if there's any point to having this container tempObject && tempObject.map(node => )*/}
      <div className="sectionsContainer">{markUpDocTree(tempObject)}</div>
    </DocsLayout>
  );
}
