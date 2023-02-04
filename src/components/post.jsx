import * as React from "react";
import { Link } from "gatsby";
import Breadcrumbs from "./breadcrumbs.jsx";
import Main from "./main.jsx";
import Metadata from "./metadata.jsx";
import Page from "./page.jsx";
import LinkCategory from "./link-category.jsx";
import Paging from "./paging.jsx";
import Sidebar from "./sidebar.jsx";

export const Post = ({ children, paging, metadata }) => {
    const { category, title, subtitle, notice } = metadata;
    return <Page>
               <Main title={title} subtitle={subtitle}
                     notice={notice}>
                   {children}
               </Main>
               <Sidebar>
                   <Paging paging={paging} />
                   <Metadata {...metadata} />
                   <Breadcrumbs>
                       <li><Link to="/">Home</Link></li>
                       <li><LinkCategory rel="tag" category={category} /></li>
                       <li aria-current="page"><cite>{title}</cite></li>
                   </Breadcrumbs>
               </Sidebar>
           </Page>;
};

export default Post;
