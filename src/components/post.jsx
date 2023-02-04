import * as React from "react";
import Main from "./main.jsx";
import Page from "./page.jsx";
import Sidebar from "./sidebar.jsx";

export const Post = ({ children, sidebar, title, subtitle, notice }) => {
    return <Page>
               <Main title={title} subtitle={subtitle}
                     notice={notice}>
                   {children}
               </Main>
               <Sidebar>
                   {sidebar}
               </Sidebar>
           </Page>;
};

export default Post;
