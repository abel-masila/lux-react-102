import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";

import history from "./utils/history";
import { JetProvider } from "./context/JetContext";

ReactDOM.render(
  <JetProvider>
    <Router history={history}>
      <App />
    </Router>
  </JetProvider>,
  document.getElementById("root")
);
