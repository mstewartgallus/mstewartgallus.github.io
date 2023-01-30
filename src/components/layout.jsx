import * as React from "react";
import { useDispatch } from "react-redux";
import { navigate } from "../state/store.js";
import { layout } from "./layout.module.css";

export const Layout = ({ children, location, data }) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(navigate({ location, data }));
    }, [dispatch, location, data]);
    return <div className={layout}>{children}</div>;
};

export default Layout;
