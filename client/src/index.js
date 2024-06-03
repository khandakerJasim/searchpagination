import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import { BrowserRouter } from "react-router-dom";
import Contextprovider from "./component/context/Contextprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contextprovider>
      <App />
    </Contextprovider>
  </React.StrictMode>
);
