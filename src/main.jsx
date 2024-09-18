// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Project from "./Project.jsx";
// import './index.css'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    {/* <App /> */}
    <Project />
    {/* </StrictMode> */}
  </BrowserRouter>
);
