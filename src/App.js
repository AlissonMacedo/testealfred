import React from "react";
import { Router } from "react-router-dom";

import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";

import Routes from "./routes";

import history from "./services/history";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
