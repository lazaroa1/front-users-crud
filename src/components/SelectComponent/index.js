import { Container } from "./styles";

function Input({ children, ...props }) {
  return (
    <Container>
      <select {...props} className="custom-select">
        {children}
      </select>
    </Container>
  );
}

export default Input;
