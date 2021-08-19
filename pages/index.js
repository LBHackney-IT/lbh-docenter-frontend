import NonDocsLayout from "../components/Layout/Non-Docs";
import DocsLayout from "../components/Layout/Docs";

export default function Home() {
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
