import { forwardRef } from "react";
import { componentName } from "./component-name.js";

const j = (x, y) => `${x} ${y}`;

const withClassImpl = (Component, className) =>
      forwardRef((props, ref) => {
          const clazz = props.className ?? '';
          const theClass = j(clazz, className);
          return <Component {...props} className={theClass} ref={ref} />;
      });

// FIXME awkward
// doesn't handle CSS conflicts
export const withClass = (Component, className) => {
    const Classy = withClassImpl(Component, className);
    const name = componentName(Component);
    Classy.displayName = `.${className}(${name})`;
    return Classy;
};
