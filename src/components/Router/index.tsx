import * as React from "react";
import { observer } from "mobx-react";
import { navigationStore, handlers } from "../../stores/navigation";
import { Pages } from "../Pages";
import { Redoc } from "../Redoc";

@observer
export class Router extends React.Component {
  render() {
    switch (navigationStore.handler) {
      case handlers.PAGES:
        return <Pages />;
      case handlers.API:
        return <Redoc />;
    }
    return null;
  }
}
