import { ViewportPage } from "@features/page";
import { BreadcrumbList, BreadcrumbItem, BreadcrumbA } from "@features/ui";
import { theme } from "@features/mdx";
import About from "@content/meta/about";
import { SeoBasic } from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

const title = "About the Author";

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    const fulltitle = useTitle(title);
    return <>
               <title>{fulltitle}</title>
               <SeoBasic title={title} url={url} />
           </>;
};

const AboutPage = () =>
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
    <About components={theme} />
</ViewportPage>;

export default AboutPage;
