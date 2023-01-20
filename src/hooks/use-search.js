import * as React from 'react';
import * as Pagefind from '../utils/pagefind.js';

const signal = () => {
    let sig;
    const promise = new Promise((r, reject) => {
        sig = reject;
    });
    return [promise, sig];
};

const pagefindToPost = ({ url, meta: { title } }) => ({
    'href': url,
    'value': title
});

const pagefindQuery = query => {
    let {s, category, tag, place, person} = query;
    if (s === '') {
        s = null;
    }

    let filters = {};
    if (category.length > 0) {
        filters.category = category;
    }
    if (tag.length > 0) {
        filters.tag = tag;
    }
    if (place.length > 0) {
        filters.place = place;
    }
    if (person.length > 0) {
        filters.person = person;
    }
    return [s, { filters }];
};

export const useSearch = query => {
    const [links, setLinks] = React.useState([]);

    React.useEffect(() => {
        const [signaled, setSignal] = signal();
        const maybe = ps => Promise.any([ps, signaled]);

        (async () => {
            const [s, opts] = pagefindQuery(query);

            const { results } = await maybe(Pagefind.search(s, opts));

            const posts = await maybe(Promise.all(
                results.slice(0, 10)
                    .map(r => r.data())));

            const links = posts.map(pagefindToPost);
            setLinks(links);
        })();

        return setSignal;
    }, [query]);

    return links;
};
