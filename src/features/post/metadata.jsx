import DescA from "../../components/desc-a.jsx";
import { DescList, DescItem } from "../../components/desc-list";
import PersonA from "../../components/link-person.jsx";
import PlaceA from "../../components/link-place.jsx";
import TagA from "../../components/link-tag.jsx";

const Places = ({places}) =>
      places.map(p =>
          <DescItem key={p}><PlaceA place={p}/></DescItem>
      );

const Tags = ({tags}) =>
      tags.map(t =>
          <DescItem key={t}><TagA tag={t}/></DescItem>
      );

const People = ({people}) =>
      people.map(p =>
          <DescItem key={p}><PersonA person={p}/></DescItem>
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
