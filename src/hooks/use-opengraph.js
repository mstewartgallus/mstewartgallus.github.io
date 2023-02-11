import * as React from 'react';
import useSiteMetadata from './use-site-metadata.js';
import favicon from '../images/favicon.svg';

export const useOpenGraph = ({description, url, title}) => {
    const site = useSiteMetadata();
    return React.useMemo(() => {
        return {
            og: {
                site_name: site.title,
                title,
                image: favicon,
                description: description ?? site.description,
                url
            }
        };
    }, [site, description, url, title]);
};

export default useOpenGraph;
