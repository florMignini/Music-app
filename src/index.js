import React from "react";
import ReactDOM from "react-dom/client";
import SearchState from "./context/search/SearchState";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchState>
    <App />
  </SearchState>
);
