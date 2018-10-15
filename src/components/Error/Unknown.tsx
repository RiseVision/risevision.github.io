import * as React from "react";
import { BaseError, Props } from "./Base";

export const Unknown = ({
  header = "500",
  subheader = "Something went wrong :("
}: Props) => {
  return <BaseError header={header} subheader={subheader} />;
};
