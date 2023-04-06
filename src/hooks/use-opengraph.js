import { useMemo } from 'react';
import useSiteMetadata from './use-site-metadata.js';

export const useOpenGraph = ({description, url, title}) => {
    const site = useSiteMetadata();
    return useMemo(() => {
        return {
            og: {
                site_name: site.title,
                title,
                description: description ?? site.description,
                url
            }
        };
    }, [site, description, url, title]);
};

export default useOpenGraph;
