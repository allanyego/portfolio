import React from "react";
import ReactDOM from "react-dom";
// import "spectre.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faIgloo,
  faUser,
  faCogs,
  faEye,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App";
import "./index.scss";

library.add(
  fab,
  faExternalLinkAlt,
  faIgloo,
  faUser,
  faCogs,
  faEye,
  faEnvelope,
  faBars
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
