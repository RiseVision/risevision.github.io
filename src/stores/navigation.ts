import { observable, action, computed, autorun } from "mobx";
import {
  join,
  includes,
  values,
  reject,
  isEmpty,
  first,
  split
} from "lodash/fp";

export const handlers = {
  NOT_FOUND: "notfound",
  PAGES: "pages",
  API: "api",
  RISE_TS: "rise-ts"
};

export const paths = {
  INDEX: "GettingStarted"
};

export class NavigationStore {
  @observable
  path = paths.INDEX;
  @observable
  handler = handlers.PAGES;

  constructor() {
    this.navigate(
      isEmpty(this.splitPath(window.location.hash).root)
        ? this.joinPath(handlers.PAGES, paths.INDEX)
        : window.location.hash,
      false
    );
    this.subscribe();
    this.syncDocumentTitle();
  }

  subscribe = () => {
    window.onpopstate = () => this.navigate(window.location.hash, false);
    window.onhashchange = event => console.log(event);
  };

  syncDocumentTitle = () =>
    autorun(
      () => (window.document.title = `${this.title} - RISE | Developers`)
    );

  @action
  navigate = (newPath: string, push = true) => {
    const { root, path } = this.splitPath(newPath);
    console.log(root, path);
    if (!includes(root, values(handlers))) {
      this.handler = handlers.NOT_FOUND;
      this.path = "";
    } else {
      this.handler = root;
      this.path = path;
    }
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
    return this.joinPath(this.handler, this.path);
  }

  splitPath = (path: string) => {
    const pathWithoutHash = path[0] === "#" ? path.slice(1) : path;
    const [root, ...rest] = split("/", pathWithoutHash);
    return { root, path: this.joinPath(...rest) };
  };

  joinPath = (...parts: string[]): string => {
    return join("/", reject(isEmpty, parts));
  };

  doPushState = () => {
    window.history.pushState({}, this.title, "#" + this.fullPath);
  };
}

export const navigationStore = new NavigationStore();
