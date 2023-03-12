import { useId } from "react";
import { page, sidebar as sidebarClass } from "./page.module.css";
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

export const Page = ({children, sidebar, heading, notice}) => {
    const id = useId();
    return <div className={page}>
               <main data-pagefind-body="" aria-describedby={id}>
                   <header>
                       <Err>
                           <hgroup id={id}>
                               {heading}
                           </hgroup>
                       </Err>
                       <Err>
                           {notice}
                       </Err>
                   </header>
                   <Err>
                       {children}
                   </Err>
               </main>
               <div className={sidebarClass}>
                   <Err>
                       {sidebar}
                   </Err>
               </div>
           </div>;
};

export default Page;
