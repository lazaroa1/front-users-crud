import { Container } from "./styles";

function Input(props) {
  return (
    <Container>
      <input {...props} className="custom-imput" />
    </Container>
  );
}

export default Input;
