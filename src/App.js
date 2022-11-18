import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./routes/Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
