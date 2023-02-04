import * as React from "react";

const Tags = ({tags}) =>
      tags.map(tag =>
          <meta key={tag} property="og:article:tag" content={tag} />);

const Opengraph = ({author, date, category, tags, people, places}) =>
      <>
          <meta property="og:type" content="article" />
          <meta property="og:article:author" content={author.name} />
          <meta property="og:article:published_time" content={date} />
          <meta property="og:article:section" content={category} />
          <meta property="og:profile" content={author.name} />
          <meta property="og:profile:username" content={author.name} />
          <Tags tags={people} />
          <Tags tags={tags} />
          <Tags tags={places} />
      </>;

export const SeoPostHead = props => {
    const {author} = props;
    return <>
               <link rel="author" href={author.url} />
               <meta name="author" content={author.name} />
               <Opengraph {...props}/>
           </>;
};

export default SeoPostHead;
