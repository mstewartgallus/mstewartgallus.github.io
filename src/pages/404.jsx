import * as React from "react";
import HeadBasic from "../components/head-basic.jsx";
import { Link } from "gatsby";
import Page from "../components/page.jsx";
import Sidebar from "../components/sidebar.jsx";
import Title from "../components/title.jsx";

export const Head = () => <>
  <HeadBasic/>
  <Title title="Not found" />
</>;

const NotFoundPage = () => {
    const id = React.useId();
    return <Page>
               <main aria-describedby={id}>
                   <header>
                       <hgroup>
                           <h1 id={id}>Page not found</h1>
                       </hgroup>
                   </header>
                   <p>
                       Sorry we couldn’t find what you were looking for.
                       <br />
                       <Link to="/">Go home</Link>.
                   </p>
               </main>
               <Sidebar>
               </Sidebar>
           </Page>;
};

export default NotFoundPage;
