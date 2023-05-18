import { useContext } from "react";
import { createPortal } from "react-dom";
import { Client } from "@features/client";
import { Context } from "./context.js";

export const Announce = ({children}) => {
    const elem = useContext(Context);
    return <Client>
               {
                   elem && createPortal(children, elem)
               }
           </Client>
};
