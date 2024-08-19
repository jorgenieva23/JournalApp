import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { JournaApp } from "./JournaApp";

import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <JournaApp />
  </BrowserRouter>
);
