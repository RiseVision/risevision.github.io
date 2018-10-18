import * as React from "react";
import { map } from "lodash/fp";
import { Item } from "./Item";

interface Props {
  [name: string]: any;
}

export class List extends React.Component<Props> {
  render() {
    return <ul {...this.props} />;
  }
}
