import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";

const render = (Elem: typeof App) =>
  ReactDOM.render(<Elem />, document.getElementById("app"));

render(App);

if (module.hot) {
  module.hot.accept("./components/App", function() {
    render(App);
  });
}
