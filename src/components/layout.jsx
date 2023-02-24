import * as React from "react";
import { layout, page, sidebar as sidebarClass } from "./layout.module.css";

const Default = () => false;

const init = {
    loading: true,
    longLoad: false
};

const reducer = (state, action) => {
    switch (action.type) {
    case 'onPreRouteUpdate':
        return { ...state, loading: true };
    case 'onRouteUpdate':
        return { ...state, loading: false, longLoad: false };
    case 'onRouteUpdateDelayed':
        return { ...state, longLoad: true };
    default:
        return state;
    }
};

const LayoutImpl = ({ children }, ref) => {
    const [state, dispatch] = React.useReducer(reducer, init);

    React.useImperativeHandle(ref, () => ({
        onPreRouteUpdate() {
            dispatch({ type: 'onPreRouteUpdate' });
        },
        onRouteUpdate() {
            dispatch({ type: 'onRouteUpdate' });
        },
        onRouteUpdateDelayed() {
            dispatch({ type: 'onRouteUpdateDelayed' });
        },
        shouldUpdateScroll() {
            return true;
        }
    }), []);

    const id = React.useId();

    const child = React.Children.only(children);
    const { type, props } = child;

    const {
        Heading = Default,
        Notice = Default,
        Sidebar = Default,
        Foot = Default
    } = type;

    return <>
               <div className={layout}>
                   <div className={page}>
                       <main data-pagefind-body="" aria-describedby={id}>
                           <header>
                               <hgroup id={id}>
                                   <Heading {...props} />
                               </hgroup>
                               <Notice {...props} />
                           </header>
                           {children}
                       </main>
                       <div className={sidebarClass}>
                           <Sidebar {...props} />
                       </div>
                   </div>
               </div>
               <Foot {...props} />
           </>;
};

export const Layout = React.forwardRef(LayoutImpl);

export default Layout;
