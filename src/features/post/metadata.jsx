import { useSearchURL } from "../../features/route";
import { A } from "../../features/ui";
import { DescA } from "./desc-a";
import { DescList, DescItem } from "./desc-list";

const TagA = ({tag}) => {
    const href = useSearchURL({tag: [tag]});
    return <A href={href} rel="tag" data-pagefind-filter="tag">{tag}</A>;
};

const PersonA = ({person}) => {
    const href = useSearchURL({ person: [person] });
    return <A href={href} rel="tag" data-pagefind-filter="person">{person}</A>;
};

const PlaceA = ({place}) => {
    const href = useSearchURL({ place: [place] });
    return <A href={href} rel="tag" data-pagefind-filter="place">{place}</A>;
};

const Places = ({places}) => places.map(p =>
    <DescItem key={p}>
        <PlaceA place={p}/>
    </DescItem>
);

const Tags = ({tags}) => tags.map(t =>
    <DescItem key={t}>
        <TagA tag={t}/>
    </DescItem>
);

const People = ({people}) => people.map(p =>
    <DescItem key={p}>
        <PersonA person={p}/>
    </DescItem>
);

const PlaceList = ({places}) =>
<DescList desc="Place">
    <Places places={places} />
</DescList>;

const TagList = ({tags}) =>
<DescList desc="Tag">
    <Tags tags={tags} />
</DescList>;

const PeopleList = ({people}) =>
<DescList desc="People">
    <People people={people} />
</DescList>;

export const Metadata = ({
    dateDisplay, date, author, places, tags, people
}) =>
<div>
    <div>
        Post Date&emsp;<time data-pagefind-filter="date[datetime]"
                      data-pagefind-sort="date[datetime]"
                      dateTime={date}>
                    {dateDisplay}
                </time>
    </div>
    <DescA rel="author" href={author.url} desc={author.name}>Author</DescA>
    { places && places.length > 0 && <PlaceList places={places} /> }
    { tags && tags.length > 0 && <TagList tags={tags} /> }
    { people && people.length > 0 && <PeopleList people={people} /> }
</div>;

export default Metadata;
