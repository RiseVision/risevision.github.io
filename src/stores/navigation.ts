import { observable, action, computed, autorun } from "mobx";
import {
  join,
  includes,
  values,
  reject,
  isEmpty,
  first,
  split,
  reduce,
  entries
} from "lodash/fp";

export enum handlers {
  NOT_FOUND = "notfound",
  PAGES = "pages",
  API = "api",
  RISE_TS = "rise-ts"
}

type matcher = (root: string, path: string) => boolean;
type matchers = { [key in handlers]: matcher };

export const matchers: matchers = {
  [handlers.PAGES]: (root, _path) => /^pages$/i.test(root),
  [handlers.NOT_FOUND]: (_root, _path) => false,
  [handlers.API]: (root, _path) => /^(api|operation|section|tag)$/i.test(root),
  [handlers.RISE_TS]: (root, _path) => /^rise-ts$/i.test(root)
};

export const paths = {
  INDEX: "GettingStarted"
};

const matchPath = (newPath: string): { handler: handlers; path: string } => {
  const { root, path } = splitPath(newPath);
  const handler = reduce(
    (result: handlers, entry: [handlers, matcher]): handlers => {
      const [handler, matcher] = entry;
      if (matcher(root, path)) {
        return handler;
      }
      return result;
    },
    handlers.NOT_FOUND,
    entries(matchers)
  );
  return { handler, path };
};

const splitPath = (path: string) => {
  const pathWithoutHash = path[0] === "#" ? path.slice(1) : path;
  const [root, ...rest] = split("/", pathWithoutHash);
  return { root, path: joinPath(...rest) };
};

const joinPath = (...parts: string[]): string => {
  return join("/", reject(isEmpty, parts));
};

export const HOME = joinPath(handlers.PAGES, paths.INDEX);

export class NavigationStore {
  @observable
  path = paths.INDEX;
  @observable
  handler = handlers.PAGES;

  constructor() {
    this.navigate(
      isEmpty(splitPath(window.location.hash).root)
        ? HOME
        : window.location.hash,
      false
    );
    this.subscribe();
    this.syncDocumentTitle();
  }

  subscribe = () => {
    window.onhashchange = event => {
      console.log("default prevented");
      event.preventDefault();
      console.log(event);
    };
    window.onpopstate = ({ state }) => {
      if (isEmpty(state && state.path)) {
        return;
      }
      this.navigate(state.path, false);
    };
  };

  syncDocumentTitle = () =>
    autorun(
      () => (window.document.title = `${this.title} - RISE | Developers`)
    );

  @action
  navigate = (newPath: string, push = true) => {
    const { handler, path } = matchPath(newPath);
    this.handler = handler;
    this.path = path;
    if (push) {
      this.doPushState();
    }
  };

  @computed
  get title() {
    switch (this.handler) {
      case handlers.NOT_FOUND:
        return "Not Found";
      case handlers.PAGES:
        return "Guides";
      case handlers.API:
        return "API Reference";
      case handlers.RISE_TS:
        return "RiseJS";
    }
    return "Loading";
  }

  @computed
  get fullPath() {
    return joinPath(this.handler, this.path);
  }

  doPushState = () => {
    window.history.pushState(
      { path: this.fullPath },
      this.title,
      "#" + this.fullPath
    );
  };
}

export const navigationStore = new NavigationStore();
