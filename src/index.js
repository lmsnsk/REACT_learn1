import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderEntireTree(store) {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App store={store} />
      </React.StrictMode>
    </BrowserRouter>
  );
}

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
