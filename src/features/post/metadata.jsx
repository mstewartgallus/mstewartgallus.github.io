import { createContext, useId, useContext } from "react";
import { useSearchURL } from "../../features/route";
import { A } from "../../features/ui";
import { DescA } from "./desc-a";
import { dl, dt, dd } from "./metadata.module.css";

const DescContext = createContext(null);

const Desc = ({desc,children}) => {
    const id = useId();
    return <div className={dl}>
               <dt className={dt} id={id}>{desc}</dt>
               <DescContext.Provider value={id}>
                   {children}
               </DescContext.Provider>
           </div>;
};

const Item = ({
    children,
    ...props
}) => {
    const id = useContext(DescContext);
    return <dd className={dd}>
               <A aria-describedby={id} {...props}>{children}</A>
           </dd>;
};

const AnItem = ({children, filter, item, ...props}) => {
    const href = useSearchURL({ [filter]: [item] });
    return <Item
               href={href}
               data-pagefind-filter={filter}
               {...props}>{children}</Item>;
};

 // items && items.length > 0 &&

export const Metadata = ({
    dateDisplay, date, author, places, tags, people
}) => <div>
          <div>
              Post Date&emsp;<time data-pagefind-filter="date[datetime]"
                                   data-pagefind-sort="date[datetime]"
                                   dateTime={date}>
                                 {dateDisplay}
                             </time>
          </div>
          <DescA rel="author" href={author.url} desc={author.name}>Author</DescA>
          <dl style={{margin:0}}>
              {
                  places && places.length > 0 &&
                      <Desc desc="Place">
                          {
                              places.map(item =>
                                  <AnItem
                                      filter="place"
                                      rel="tag"
                                      item={item}
                                  >
                                      {item}
                                  </AnItem>
                              )
                          }
                      </Desc>
              }
              {
                  tags && tags.length > 0 &&
                      <Desc desc="Tag">
                          {
                              tags.map(item =>
                                  <AnItem
                                      filter="tag"
                                      rel="tag"
                                      item={item}
                                  >
                                      {item}
                                  </AnItem>
                              )
                          }
                      </Desc>
              }
              {
                  people && people.length > 0 &&
                      <Desc desc="Person">
                          {
                              people.map(item =>
                                  <AnItem
                                      filter="person"
                                      rel="tag"
                                      item={item}
                                  >
                                      {item}
                                  </AnItem>
                              )
                          }
                      </Desc>
              }
          </dl>
      </div>;

export default Metadata;
