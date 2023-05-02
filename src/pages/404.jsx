import { AlertPage } from "@features/page";
import { P } from "@features/ui";
import { SeoBasic } from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

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
<AlertPage heading="Page Not Found">
    <P>Sorry the page you requested could not be found.</P>
</AlertPage>;

export default NotFoundPage;
