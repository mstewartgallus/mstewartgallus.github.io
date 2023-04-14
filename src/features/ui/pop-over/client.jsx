import { useContext, useId } from "react";
import { createPortal } from "react-dom";
import { Context } from "./context.jsx";
import { Theme } from "../theme";

export const PopOverClient = ({children}) => {
    const ref = useContext(Context);
    const id = useId();
    if (!ref) {
        return null;
    }
    return <>
               {
                   createPortal(
                       <Theme>
                           <div id={id}>
                               {children}
                           </div>
                       </Theme>,
                       ref.current)
               }
               <div aria-owns={id} />
           </>;
};

export default PopOverClient;
