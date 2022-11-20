import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.sizeLarge}px;
    color: ${({ theme }) => theme.blackTwo};
  }
`;
