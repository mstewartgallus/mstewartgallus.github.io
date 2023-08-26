import { Children } from 'react';
import { LgContext, LContext } from "../lg-context.js";
import { lg } from "./lg.module.css";

const LgProvider = LgContext.Provider;
const LProvider = LContext.Provider;

export const Lg = ({
    children,
    count = Children.count(children)
}) =>
<p className={lg}>
    <LgProvider value={count}>
        {Children.map(children, (child, ix) => <LProvider value={ix}>
                                             {child}
                                         </LProvider>
                     )}
    </LgProvider>
</p>;
