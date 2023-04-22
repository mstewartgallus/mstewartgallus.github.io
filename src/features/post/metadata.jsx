import { useSearchURL } from "@features/route";
import { A, Address, Dl, DlDiv, Dd, Dt, Time, ClickTrap } from "@features/ui";

const Item = ({ children, filter, item }) => {
    const href = useSearchURL({ [filter]: [item] });
    return <A href={href} data-pagefind-filter={filter}>
               {children}
               <ClickTrap />
           </A>
};

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
    {
        places && places.length > 0 &&
            <DlDiv>
                <Dt>Place</Dt>
                {
                    places.map(item =>
                        <Dd>
                            <Item filter="place" item={item}>
                                {item}
                            </Item>
                        </Dd>
                    )
                }
            </DlDiv>
    }
    {
        tags && tags.length > 0 &&
            <DlDiv>
                <Dt>Tags</Dt>
                {
                    tags.map(item =>
                        <Dd>
                            <Item filter="tag" item={item}>
                                {item}
                            </Item>
                        </Dd>
                    )
                }
            </DlDiv>
    }
    {
        people && people.length > 0 &&
            <DlDiv>
                <Dt>Person</Dt>
                {
                    people.map(item =>
                        <Dd>
                            <Item filter="person" item={item}>
                                {item}
                            </Item>
                        </Dd>
                    )
                }
            </DlDiv>
    }
</Dl>;
