import { AlertLayout } from "../features/layout";
import { H1, P } from "../features/ui";
import HeadBasic from "../components/head-basic.jsx";
import SeoBasic from "../components/seo-basic.jsx";
import Title from "../components/title.jsx";
import useAbsolute from "../hooks/use-absolute.js";

const title = "Page Not Found";

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    return <>
               <HeadBasic />
               <Title>{title}</Title>
               <SeoBasic title={title} url={url} />
           </>;
};

const NotFoundPage = () =>
<AlertLayout
    heading={<H1>Page Not Found</H1>}>
    <P>Sorry the page you requested could not be found.</P>
</AlertLayout>;

export default NotFoundPage;
