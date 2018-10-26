import { observable, action, autorun } from "mobx";
import { navigationStore } from "./navigation";

export class FlyOutMenuStore {
  name: string;

  @observable
  isOpen: boolean;

  constructor(name = "Default") {
    this.name = name;
    this.isOpen = false;
    this.subscribe();
  }

  subscribe = () => {
    autorun(() => {
      const nextTick = navigationStore.tick;
      this.close();
    });
  };

  @action
  close = () => {
    this.isOpen = false;
  };

  @action
  open = () => {
    this.isOpen = true;
  };

  @action
  toggle = () => {
    this.isOpen ? this.close() : this.open();
  };
}

export const tocFlyOutMenuStore = new FlyOutMenuStore("toc");
export const navFlyOutMenuStore = new FlyOutMenuStore("nav");
