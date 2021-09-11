import DocsLayout from "../../components/Layout/Docs";
import Loading from "../../components/Loading/Loading";
import useSWR from "swr";

const { queryAPIsList } = require("../../data/accessMethods");

export default function APIDoc() {
  const { data: navbarList, error: navbarListError } = useSWR(["/apis"], queryAPIsList);

  const tocItems = [...Array(10).keys()].map((num) => {
    return { name: `Section ${num}` };
  });

  return (
    <DocsLayout navAPIsList={navbarList} tocSections={tocItems}>
      {/* Not sure yet if there's any point to having this container tempObject && tempObject.map(node => )*/}
      <article className="sectionsContainer">
        {/* Empty marker*/}
        <p>
          Do you think this could be the D3 page? Thinking about the D3 page, This will require the adding of dependecy
          API property.
        </p>
        {/* Empty marker*/}
      </article>
    </DocsLayout>
  );
}
