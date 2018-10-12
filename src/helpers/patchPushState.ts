import { isEmpty } from "lodash/fp";

declare global {
  interface Window {
    onpushstate?: (data: any, title: string, url?: string | null) => any;
  }
  interface History {
    pushStatePatched?: boolean;
  }
}

export const patchPushState = (history: History) => {
  if (history.pushStatePatched) {
    return;
  }
  const pushState = history.pushState;
  const newPushState: typeof history.pushState = (...args) => {
    let newArgs = args;
    if (typeof window.onpushstate == "function") {
      const preventDefault = window.onpushstate(...args);
      if (preventDefault) {
        return;
      }
    }
    return pushState.apply(history, newArgs);
  };
  history.pushState = newPushState;
  history.pushStatePatched = true;
};
