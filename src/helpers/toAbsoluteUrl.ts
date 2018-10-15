import { last, split, includes } from "lodash/fp";

export const toAbsoluteUrl = (url: string): string => {
  const file = last(split("/", url));
  if (!includes(".", file) && last(url) !== "/") {
    url += "/"; // append trailing slash otherwise github.io pages redirect to insecure content
  }
  if (window.URL) {
    return new URL(url, window.location.href).href;
  }
  const link = document.createElement("a");
  link.href = url;
  return link.href;
};
