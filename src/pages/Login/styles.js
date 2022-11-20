import styled from "styled-components";

export const Container = styled.div`
  .group {
    input {
      display: block;
    }
  }

  h1 {
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.sizeLarge}px;
    color: ${({ theme }) => theme.blackTwo};
  }
`;
