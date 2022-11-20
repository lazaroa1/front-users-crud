import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

import "react-toastify/dist/ReactToastify.css";

const GlobalStyles = createGlobalStyle`
  html, body{
    background-color: ${({ theme }) => theme.whiteOne};
    width: 100%;
    height: 100%;
    margin: 0;
  }

  label {
    color: ${({ theme }) => theme.blackOne};
    font-size: ${({ theme }) => theme.fonts.sizeSmall}px;
  }

  a {
    color: ${({ theme }) => theme.brownFour};
    font-size: ${({ theme }) => theme.fonts.sizeSmall}px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    margin: 0;
  }

  .btn-filter {
    display: flex;
    align-items: flex-end;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default function GlobalStyle({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
