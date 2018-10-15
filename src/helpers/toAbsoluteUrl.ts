export const toAbsoluteUrl = (url: string): string => {
  if (window.URL) {
    return new URL(url, window.location.href).href;
  }
  const link = document.createElement("a");
  link.href = url;
  return link.href;
};
