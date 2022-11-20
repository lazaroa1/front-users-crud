import { Container } from "./styles";

function Layout({ children }) {
  return (
    <Container>
      <div className="content">{children}</div>
    </Container>
  );
}

export default Layout;
