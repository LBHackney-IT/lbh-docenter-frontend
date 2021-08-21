import NonDocsLayout from "../components/Layout/Non-Docs";
import DocsLayout from "../components/Layout/Docs";

// temp import before I set-up data fetching
const { tempObject } = require("../mock-server/testData");

export default function Home() {
  console.log(tempObject);
  return (
    <DocsLayout>
      <div>
        <p>Home Page</p>
      </div>
      <div>
        <ul
          style={{
            color: "blue",
            listStyleType: "none",
          }}
        >
          {[...Array(123).keys()].map((num) => (
            <li key={num}>
              <a href="#">Item {num}</a>
            </li>
          ))}
        </ul>
      </div>
    </DocsLayout>
  );
}
