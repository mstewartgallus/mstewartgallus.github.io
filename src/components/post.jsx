import * as React from "react";
import { Link } from "gatsby";
import Breadcrumbs from "./breadcrumbs.jsx";
import Main from "./main.jsx";
import Metadata from "./metadata.jsx";
import Page from "./page.jsx";
import LinkCategory from "./link-category.jsx";
import Paging from "./paging.jsx";
import Sidebar from "./sidebar.jsx";

const author = {
    name: "Molossus Spondee",
    url: "/about/"
};

export const Post = ({
    children, previous, next,
    metadata: {
        category, dateXml, dateDisplay, title, subtitle,
        notice, tags, places, people
    }
}) =>
<Page>
    <Main title={title} subtitle={subtitle}
          notice={notice}>
        {children}
    </Main>
    <Sidebar>
        <Paging
            previous={previous?.title}
            next={next?.title}
            phref={previous?.slug}
            nhref={next?.slug} />
        <Metadata
            author={author}
            dateDisplay={dateDisplay} dateXml={dateXml}
            tags={tags} places={places} people={people}
        />
        <Breadcrumbs>
            <li><Link to="/">Home</Link></li>
            <li><LinkCategory rel="tag" category={category} /></li>
            <li aria-current="page"><cite>{title}</cite></li>
        </Breadcrumbs>
    </Sidebar>
</Page>;

export default Post;
