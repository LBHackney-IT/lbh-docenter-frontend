import Header from "./Header";

const DocsLayout = ({ children }) => (
  <>
    <Header serviceName="Connected Documentation" />
    <main>{children}</main>
  </>
);

export default DocsLayout;
