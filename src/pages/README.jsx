import { ViewportPage } from "@features/page";
import { BreadcrumbList, BreadcrumbItem, BreadcrumbA } from "@features/ui";
import { theme } from "@features/mdx";
import Readme from "@content/meta/README";
import { SeoBasic } from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

const title = "About this Blog";

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    const fulltitle = useTitle(title);
    return <>
               <title>{fulltitle}</title>
               <SeoBasic title={title} url={url} />
           </>;
};

const ReadmePage = () =>
<ViewportPage
    breadcrumbs={
        <BreadcrumbList>
            <BreadcrumbA href="/">Home</BreadcrumbA>
            <BreadcrumbItem>
                <span aria-current="page">{title}</span>
            </BreadcrumbItem>
        </BreadcrumbList>
    }
    heading={title}>
    <Readme components={theme} />
</ViewportPage>;

export default ReadmePage;
