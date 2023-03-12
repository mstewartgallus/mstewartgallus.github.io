import { page, mainbar as mainbarClass, sidebar as sidebarClass } from "./page.module.css";
import ErrorBoundary from "../error-boundary.jsx";
import Error from "../error";
import { parse } from "../../utils/error.js";

const Err = ({children}) =>
<ErrorBoundary
    fallback={e =>
        parse(e).map(({message, name, stack}) =>
            <Error message={message} name={name} stack={stack} />)
    }>
    {children}
</ErrorBoundary>;

export const Page = ({children, sidebar}) => {
    return <div className={page}>
               <div className={mainbarClass}>
                   <Err>
                       {children}
                   </Err>
               </div>
               <div className={sidebarClass}>
                   <Err>
                       {sidebar}
                   </Err>
               </div>
           </div>;
};

export default Page;
