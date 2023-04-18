import { SeoBasic } from "../../components/seo-basic";
import { JsonLd } from "../../components/json-ld";
import { SeoPostHead } from "./seo-post-head";
import { useTitle } from "../../components/title";
import { useAbsolute } from "../../hooks/use-absolute";
import { useBreadcrumbList } from "./use-breadcrumb-list";
import { useBlogPosting } from "./use-blog-posting";

const HeadStuff = ({ post }) => {
    const { description, title, slug } = post;
    const url = useAbsolute(slug);
    const breadcrumbList = useBreadcrumbList(post);
    const blogPosting = useBlogPosting(post);
    return <>
               <SeoBasic description={description} title={title} url={url} />
               <SeoPostHead {...post} />
               <JsonLd srcdoc={breadcrumbList} />
               <JsonLd srcdoc={blogPosting} />
           </>;
};

const TitleStuff = ({ post }) => {
    const fulltitle = useTitle(post.title);
    return <title>{fulltitle}</title>;
};

export const PostHead = props =>
<>
    <TitleStuff {...props} />
    <HeadStuff  {...props} />
</>;
