import { useContext } from "react";
import { Context } from "./context.js";

export const useLocationContext = () => useContext(Context);

export const useLocation = () => useLocationContext().location;
export const usePrevLocation = () => useLocationContext().prevLocation;
