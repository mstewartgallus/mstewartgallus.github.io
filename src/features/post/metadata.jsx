import { createContext, useId, useContext } from "react";
import { useSearchURL } from "../../features/route";
import { A } from "../../features/ui";
import { DescA } from "./desc-a";
import { Set, SetItem } from "./set";
import { dl, dt } from "./metadata.module.css";

const DescContext = createContext(null);

const Desc = ({desc,children}) => {
    const id = useId();
    return <div role="presentation" className={dl}>
               <div className={dt} id={id}>{desc}</div>
               <Set aria-labelledby={id}>
                   <DescContext.Provider value={id}>
                       {children}
                   </DescContext.Provider>
               </Set>
           </div>;
};

const DescItem = ({ children, filter, item, ...props }) => {
    const id = useContext(DescContext);
    const href = useSearchURL({ [filter]: [item] });
    return <SetItem>
               <A href={href} data-pagefind-filter={filter}
                  aria-describedby={id} {...props}>{children}</A>
           </SetItem>;
};

 export const Metadata = ({
    dateDisplay, date, author, places, tags, people
}) => {
    const id = useId();
    return <>
               <div role="presentation">
                   <span id={id}>Post Date</span>
                   &emsp;
                   <time
                       aria-describedby={id}
                       data-pagefind-filter="date[datetime]"
                       data-pagefind-sort="date[datetime]"
                       dateTime={date}>
                       {dateDisplay}
                   </time>
               </div>
               <address>
                   <DescA rel="author" href={author.url} desc={author.name}>Author</DescA>
               </address>
               {
                   places && places.length > 0 &&
                       <Desc desc="Place">
                           {
                               places.map(item =>
                                   <DescItem
                                       key={item}
                                       filter="place"
                                       rel="tag"
                                       item={item}
                                   >
                                       {item}
                                   </DescItem>
                               )
                           }
                       </Desc>
               }
               {
                   tags && tags.length > 0 &&
                       <Desc desc="Tag">
                           {
                               tags.map(item =>
                                   <DescItem
                                       key={item}
                                       filter="tag"
                                       rel="tag"
                                       item={item}
                                   >
                                       {item}
                                   </DescItem>
                               )
                           }
                       </Desc>
               }
               {
                   people && people.length > 0 &&
                       <Desc desc="Person">
                           {
                               people.map(item =>
                                   <DescItem
                                       key={item}
                                       filter="person"
                                       rel="tag"
                                       item={item}
                                   >
                                       {item}
                                   </DescItem>
                               )
                           }
                       </Desc>
               }
           </>;
};

export default Metadata;
