import React from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <p>Crud with Redux</p>
    </Provider>
  );
}

export default App;
