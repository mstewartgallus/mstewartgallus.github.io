import { AlertLayout } from "../features/layout";
import { H1, P } from "../features/ui";
import SeoBasic from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";

const title = "Page Not Found";

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    const fulltitle = useTitle(title);
    return <>
               <title>{fulltitle}</title>
               <SeoBasic title={title} url={url} />
           </>;
};

const NotFoundPage = () =>
<AlertLayout
    heading={<H1>Page Not Found</H1>}>
    <P>Sorry the page you requested could not be found.</P>
</AlertLayout>;

export default NotFoundPage;
