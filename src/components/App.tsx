import * as React from "react";
import { Page } from './Page'

export class App extends React.PureComponent<{}> {
  render() {
    return (
      <div>
        <Page page={"Hello"} cool={"hi"} />
      </div>
    );
  }
}
