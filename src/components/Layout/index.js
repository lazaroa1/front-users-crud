import { Container } from "./styles";

function Layout({ children, size }) {
  return (
    <Container size={size}>
      <div className="content">{children}</div>
    </Container>
  );
}

export default Layout;
