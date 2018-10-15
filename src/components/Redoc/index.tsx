import * as React from "react";
import { RedocStandalone } from "redoc";
import spec from "../../constants/swagger.json";
import * as styles from "./styles.css";

export class Redoc extends React.Component {
  private container: HTMLElement | null;
  render() {
    return (
      <div ref={ref => (this.container = ref)} className={styles.container}>
        <RedocStandalone
          spec={spec}
          options={{
              expandResponses: "200,201",
              scrollYOffset: 50
          }}
          onLoaded={error => {
            if (!this.container || error) {
              return;
            }
            this.container
              .querySelectorAll("td[kind=field]")
              .forEach((item: HTMLElement) => item.click());
          }}
        />
      </div>
    );
  }
}
