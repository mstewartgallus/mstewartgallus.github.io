import * as React from "react";
import { Link } from "gatsby";
import LinkPerson from "./link-person.jsx";
import LinkPlace from "./link-place.jsx";
import LinkTag from "./link-tag.jsx";
import { metadata } from "./metadata.module.css";

const Places = ({places}) =>
      places.map(p =>
          <dd key={p}><LinkPlace place={p}/></dd>
      );

const Tags = ({tags}) =>
      tags.map(t =>
          <dd key={t}><LinkTag tag={t}/></dd>
      );

const People = ({people}) =>
      people.map(p =>
          <dd key={p}><LinkPerson person={p}/></dd>
      );

const PlaceList = ({places}) =>
      places && places.length > 0 &&
    <div>
        <dt>Place</dt>
        <Places places={places} />
    </div>;

const TagList = ({tags}) =>
      tags && tags.length > 0 &&
    <div>
        <dt>Tag</dt>
        <Tags tags={tags} />
    </div>;

const PeopleList = ({people}) =>
      people && people.length > 0 &&
    <div>
        <dt>People</dt>
        <People people={people} />
    </div>;

export const Metadata = ({
    dateDisplay, date, author, places, tags, people
}) => {
    const id = React.useId();
    return <footer className={metadata} aria-describedby={id}>
               <hgroup className="sr-only">
                   <h2 id={id}>Metadata</h2>
               </hgroup>

               <dl>
                   <div>
                       <dt>Post Date</dt>
                       <dd>
                           <time data-pagefind-filter="date[datetime]"
                                 data-pagefind-sort="date[datetime]"
                                 dateTime={date}>
                               {dateDisplay}
                           </time>
                       </dd>
                   </div>
                   <div>
                       <dt><Link rel="author" to={author.url}>Author</Link></dt>
                       <dd>{author.name}</dd>
                   </div>
                   <PlaceList places={places} />
                   <TagList tags={tags} />
                   <PeopleList people={people} />
               </dl>
           </footer>;
};

export default Metadata;
