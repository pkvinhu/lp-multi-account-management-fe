import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./themes";
import configureStore from "./store";

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>,
  document.getElementById("root")
);
