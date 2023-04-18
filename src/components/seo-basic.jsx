import { flatten } from "../utils/flatten.js";
import { useSiteMetadata } from '../hooks/use-site-metadata.js';
import { useOpenGraph } from '../hooks/use-opengraph.js';

const Open = props => {
    const json = useOpenGraph(props);

    return Array.from((function* (){
        for (const [ix, k, v] of flatten(json)) {
            yield <meta key={ix} property={k} content={v} />;
        }
    })());
};

export const SeoBasic = props => {
    const {description, url} = props;
    const site = useSiteMetadata();
    return <>
               {url && <link rel="canonical" href={url} /> }
               <meta name="description" content={description ?? site.description} />
               <Open {...props} />
           </>;
};
