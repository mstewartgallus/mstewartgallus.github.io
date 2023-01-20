import * as React from "react";
import { Link } from "gatsby";
import { search } from "../utils/search.js";
import { metadata } from "./metadata.module.css";

const Place = ({place}) => {
    const to = search(['place', place]);
    return <Link to={to}
                 rel="tag"
                 data-pagefind-filter="place">{place}</Link>;
};
const PlaceList = ({places}) =>
      places && places.length > 0 &&
    <div>
        <dt>Place</dt>
        {
            places.map(p =>
                <dd key={p}><Place place={p}/></dd>
            )
        }
    </div>;

const Tag = ({tag}) => {
    const to = search(['tag', tag]);
    return <Link to={to} rel="tag" data-pagefind-filter="tag">{tag}</Link>;
};
const TagList = ({tags}) =>
      tags && tags.length > 0 &&
    <div>
        <dt>Tag</dt>
        {
            tags.map(t =>
                <dd key={t}><Tag tag={t} /></dd>)
        }
    </div>;

const Person = ({person}) => {
    const to = search(['person', person]);
    return <Link to={to} rel="tag" data-pagefind-filter="person">{person}</Link>;
};
const PeopleList = ({people}) =>
      people && people.length > 0 &&
    <div>
        <dt>People</dt>
        {
            people.map(p =>
                <dd key={p}><Person person={p}/></dd>
            )
        }
    </div>;

export const Metadata = ({
    dateDisplay, dateXml, author, places, tags, people
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
                                 dateTime={dateXml}>
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
