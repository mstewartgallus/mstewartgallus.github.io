import { useSearchURL } from "@features/route";
import { A, Address, Dl, DlDiv, Dd, Dt, Time, ClickTrap } from "@features/ui";

const Item = ({ children, filter, item }) => {
    const href = useSearchURL({ [filter]: [item] });
    return <A href={href} data-pagefind-filter={filter}>
               {children}
               <ClickTrap />
           </A>
};

const Items = ({ filter, items }) =>
      items.map(item =>
          <Dd>
              <Item filter={filter} item={item}>
                  {item}
              </Item>
          </Dd>);

const ItemList = ({ label, filter, items }) =>
      items && items.length > 0 &&
    <DlDiv>
        <Dt>{label}</Dt>
        <Items filter={filter} items={items} />
    </DlDiv>;

export const Metadata = ({
    dateDisplay, date, author, places, tags, people
}) =>
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
    <ItemList label="Place" filter="place" items={places} />
    <ItemList label="Tag" filter="tag" items={tags} />
    <ItemList label="Person" filter="person" items={people} />
</Dl>;
