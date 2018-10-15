import * as React from "react";
import { observer } from "mobx-react";
import { navigationStore, handlers } from "../../stores/navigation";
import { Route } from "./Route";

type handlerResolver = () => Promise<JSX.Element>;
type resolvers = { [key in handlers]: handlerResolver };

const resolvers: resolvers = {
  [handlers.PAGES]: async () => {
    const Pages = (await import("../Pages")).Pages;
    return <Pages />;
  },
  [handlers.API]: async () => {
    const Redoc = (await import("../Redoc")).Redoc;
    return <Redoc />;
  },
  [handlers.RISE_TS]: async () => {
    const IFrame = (await import("../IFrame")).IFrame;
    return <IFrame url="/assets/rise-ts" />;
  },
  [handlers.NOT_FOUND]: async () => {
    const NotFound = (await import("../Error/NotFound")).NotFound;
    return <NotFound />;
  }
};

@observer
export class Router extends React.Component {
  render() {
    return <Route resolver={resolvers[navigationStore.handler]} />;
  }
}
