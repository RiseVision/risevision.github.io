import * as React from "react";
import { BaseError, Props } from "./Base";

export const NotFound = ({
  header = "404",
  subheader = "Not Found :("
}: Props) => {
  return <BaseError header={header} subheader={subheader} />;
};
