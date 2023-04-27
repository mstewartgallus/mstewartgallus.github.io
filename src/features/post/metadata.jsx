import { useId } from "react";
import { useSearchURL } from "@features/route";
import { A, Address, Dl, DlDiv, Dd, Dt, Time, Menubar, MenuItem, MenuA, ClickTrap } from "@features/ui";

const Item = ({ children, filter, item }) => {
    const href = useSearchURL({ [filter]: [item] });
    return <MenuA href={href} data-pagefind-filter={filter}>
               {children}
           </MenuA>;
};

const Items = ({ label, filter, items }) => {
    const id = useId();
    return <Menubar aria-labelledby={id}>
               <MenuItem role="presentation" menuLabel id={id}>{label}</MenuItem>
               {
                   items.map(item =>
                       <Item key={item} filter={filter} item={item}>
                           {item}
                       </Item>
                   )
               }
           </Menubar>;
};

const ItemList = ({ label, filter, items }) =>
      items && items.length > 0 && <Items label={label} filter={filter} items={items} />;

export const Metadata = ({
    dateDisplay, date, author, places, tags, people
}) =>
<>
    <Dl>
    <DlDiv>
        <Dt>Post Date</Dt>
        <Dd>
            <Time data-pagefind-filter="date[datetime]"
                  data-pagefind-sort="date[datetime]"
                  dateTime={date}>
                {dateDisplay}
            </Time>
        </Dd>
    </DlDiv>
    <DlDiv>
        <Dt>Author</Dt>
        <Dd>
            <Address>
                <A rel="author" href={author.url}>
                    {author.name}
                    <ClickTrap />
                </A>
            </Address>
        </Dd>
    </DlDiv>
    </Dl>
    <ItemList label="Place" filter="place" items={places} />
    <ItemList label="Tag" filter="tag" items={tags} />
    <ItemList label="Person" filter="person" items={people} />
</>;
