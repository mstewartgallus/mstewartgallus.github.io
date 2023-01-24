import * as React from "react";
import { Link } from "gatsby";
import Breadcrumbs from "./breadcrumbs.jsx";
import Main from "./main.jsx";
import Metadata from "./metadata.jsx";
import Page from "./page.jsx";
import Paging from "./paging.jsx";
import PostPoem from "./post-poem.jsx";
import Sidebar from "./sidebar.jsx";
import { search } from "../utils/search.js";

const Category = ({category}) => {
    const to = search(['category', category]);
    return <Link to={to}
                     rel="tag"
                     data-pagefind-filter="category">{category}</Link>;
};

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
            <li><Category category={category} /></li>
            <li aria-current="page"><cite>{title}</cite></li>
        </Breadcrumbs>
    </Sidebar>
</Page>;

export default Post;
