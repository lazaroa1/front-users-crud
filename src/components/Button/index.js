import { Container, CustomButton } from "./styles";

function Button({ children, light, ...props }) {
  return (
    <Container>
      <CustomButton light {...props}>
        {children}
      </CustomButton>
    </Container>
  );
}

export default Button;
