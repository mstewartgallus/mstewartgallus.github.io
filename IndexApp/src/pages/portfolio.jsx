import { ViewportPage } from "@features/page";
import { BreadcrumbList, BreadcrumbItem, BreadcrumbA, Subheading } from "@features/ui";
import { theme } from "@features/mdx";
import Main from "@content/meta/portfolio/main";
import Side from "@content/meta/portfolio/side";
import { SeoBasic } from "../components/seo-basic.jsx";
import { useTitle } from "../components/title.jsx";
import { useAbsolute } from "../hooks/use-absolute.js";

const title = "Molly Stewart-Gallus";
const subtitle = "Poet, webdev, hacker";

export const Head = ({location: {pathname}}) => {
    const url = useAbsolute(pathname);
    const fulltitle = useTitle(title);
    return <>
               <title>{fulltitle}</title>
               <SeoBasic title={title} url={url} />
           </>;
};

const PortfolioPage = () =>
<ViewportPage
    breadcrumbs={
        <BreadcrumbList>
            <BreadcrumbA href="/">Home</BreadcrumbA>
            <BreadcrumbItem>
                <span aria-current="page">{title}</span>
            </BreadcrumbItem>
        </BreadcrumbList>
    }
    heading={title}
    subheading={<Subheading>{subtitle}</Subheading>}
    support={<Side components={theme}/>}
>
    <Main components={theme} />
</ViewportPage>;

export default PortfolioPage;
