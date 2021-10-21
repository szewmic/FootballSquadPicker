import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { App } from "./App";

function counterReducer(state = { value: 0 }, action: any) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById("root")
);
