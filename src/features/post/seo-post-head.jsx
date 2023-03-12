import flatten from "../../utils/flatten.js";
import useOpenGraphBlog from '../../hooks/use-opengraph-blog.js';

const Open = props => {
    const json = useOpenGraphBlog(props);
    return Array.from((function* (){
        for (const [ix, k, v] of flatten(json)) {
            yield <meta key={ix} property={k} content={v} />;
        }
    })());

};


export const SeoPostHead = props => {
    const {author} = props;
    return <>
               <link rel="author" href={author.url} />
               <meta name="author" content={author.name} />
               <Open {...props}/>
           </>;
};

export default SeoPostHead;
