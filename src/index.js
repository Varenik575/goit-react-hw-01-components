import "../src/index.css";
import WebFont from "webfontloader";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";

WebFont.load({
  google: {
    families: ["Fredoka:300,400,700", "sans-serif"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
