import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import App from "./App";
import "./config/i18/i18nextInit";


const root = ReactDOM.createRoot(document?.getElementById("root") ?? document.createElement("div"));
root.render(
    <App />,
);

