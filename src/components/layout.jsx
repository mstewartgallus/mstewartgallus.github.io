import * as React from "react";
import { layout, page, sidebar as sidebarClass } from "./layout.module.css";
import ErrorBoundary from "./error-boundary.jsx";
import Error from "./error.jsx";

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

const Err = ({children}) =>
<ErrorBoundary fallback={e => <Error error={e} />}>
    {children}
</ErrorBoundary>;

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
                                   <Err>
                                       <Heading {...props} />
                                   </Err>
                               </hgroup>
                               <Err>
                                   <Notice {...props} />
                               </Err>
                           </header>
                           <Err>
                               {children}
                           </Err>
                       </main>
                       <div className={sidebarClass}>
                           <Err>
                               <Sidebar {...props} />
                           </Err>
                       </div>
                   </div>
               </div>
               <Err>
                   <Foot {...props} />
               </Err>
           </>;
};

export const Layout = React.forwardRef(LayoutImpl);

export default Layout;
