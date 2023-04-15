import { useCallback, useReducer, createContext, useContext, useTransition } from "react";
import { useLocation } from "@gatsbyjs/reach-router";
import {
    SearchForm,
    Sidebar,
    Banner,
    Panel,
    PostList,
    usePostList, usePosts, useWebsite
} from "@features/index";
import { useSearchURL } from "@features/route";
import {
    BreadcrumbList, BreadcrumbItem,
    Card,
    H2,
    Header,
    Subheading,
} from "@features/ui";
import { useSubmit } from "@features/util";
import { ViewportPage, SkipA } from "@features/page";
import JsonLd from "../components/json-ld.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";
import useSiteMetadata from "../hooks/use-site-metadata.js";

const initState = null;

const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
    case 'toggle': {
        const { category } = action;
        return state === category ? null : category;
    }

    default:
        return state;
    }
};

const Selection = createContext(null);
Selection.displayName = 'Selection';

const Value = createContext(null);
Value.displayName = 'Value';

const Toggle = createContext(null);
Toggle.displayName = 'Toggle';

const useSelection = () => useContext(Selection);
const useValue = () => useContext(Value);
const useToggle = () => useContext(Toggle);

const ToggleProvider = ({children, value: toggle}) => {
    const value = useValue();
    const toggleValue = useCallback(() => toggle(value), [toggle, value]);
    return <Toggle.Provider value={toggleValue}>
               {children}
           </Toggle.Provider>;
};

const SelectionProvider = Selection.Provider;
const ValueProvider = Value.Provider;

const useSelected = () => {
    const value = useValue();
    const selection = useSelection();
    return value === selection;
};

const Accordion = ({posts}) => {
    const [selection, dispatch] = useReducer(reducer, initState);
    const [, startTransition] = useTransition();
    const toggle = useCallback(value =>
        startTransition(() => dispatch({ type: 'toggle', category: value }))
    , []);

    return <SelectionProvider value={selection}>
               {
                   Object.entries(posts).map(([category, p]) =>
                       <ValueProvider key={category} value={category}>
                           <ToggleProvider value={toggle}>
                               {p}
                           </ToggleProvider>
                       </ValueProvider>
                   )
               }
           </SelectionProvider>;
};

const PanelImpl = ({id, children, heading}) => {
    const selected = useSelected();
    const toggle = useToggle();

    return <Panel id={id} heading={heading}
                  open={selected}
                  onClick={toggle}>
               {children}
           </Panel>;
};

const title = "Posts";

const Seo = () => {
    const { pathname } = useLocation();
    const url = useAbsolute(pathname);
    return <SeoBasic title={title} url={url} />;
};

export const Head = () => {
    const json = useWebsite();
    const fulltitle = useTitle(title);
    return <>
               <title>{fulltitle}</title>
               <link type="application/atom+xml" rel="alternate" href="/feed.xml" />
               <Seo />
               <JsonLd srcdoc={json} />
           </>;
};

const IndexPage = () => {
    const posts = usePosts();
    const { title, description } = useSiteMetadata();
    const onSubmit = useSubmit();
    const search = useSearchURL();
    const postsByCategory = usePostList();
    return <ViewportPage
               skipA={<SkipA>Posts</SkipA>}
               sidebar={
                   <Sidebar
                       search={
                           <SearchForm action={search} onSubmit={onSubmit} />
                       }
                   >
                       <Card>
                           <Header
                               heading={
                                   <>
                                       <H2 tabIndex="-1" id="banner">{title}</H2>
                                       <Subheading>{description}</Subheading>
                                   </>}>
                               <Banner />
                           </Header>
                       </Card>
                   </Sidebar>
               }
               breadcrumbs={
                   <BreadcrumbList>
                       <BreadcrumbItem>
                           <span aria-current="page">Home</span>
                       </BreadcrumbItem>
                   </BreadcrumbList>
               }
               mainbar={
                   <Accordion
                       posts={
                           Object.fromEntries(
                               Object.entries(postsByCategory)
                                   .map(([category, p]) => [
                                       category,
                                       <PanelImpl id={category}
                                                  heading={category}>
                                           <PostList posts={p} />
                                       </PanelImpl>
                                   ]))
                       }
                   />
               }

               heading="Posts"
           >
               <PostList posts={posts} />
           </ViewportPage>;
};


export default IndexPage;
