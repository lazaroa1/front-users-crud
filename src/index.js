import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom/client";

import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <GlobalStyle>
      <BrowserRouter>
        <Router />
        <ToastContainer />
      </BrowserRouter>
    </GlobalStyle>
  </StrictMode>
);
