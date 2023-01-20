import * as React from "react";
import { breadcrumbs, breadcrumb } from "./breadcrumbs.module.css";

export const Breadcrumbs = ({children}) => {
    const id = React.useId();
    return <nav className={breadcrumbs} aria-labelledby={id}>
            <header className="sr-only">
              <hgroup>
                <h2 id={id}>Breadcrumbs</h2>
              </hgroup>
            </header>

        <ol className={breadcrumb}>{children}</ol>
      </nav>;
};
export default Breadcrumbs;
