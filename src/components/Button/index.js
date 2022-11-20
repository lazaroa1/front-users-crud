import { Container } from "./styles";

function Button({ children, ...props }) {
  return (
    <Container>
      <button className="btn" {...props}>
        {children}
      </button>
    </Container>
  );
}

export default Button;
