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

    category = Array.from(category);
    tag = Array.from(tag);
    place = Array.from(place);
    person = Array.from(person);

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


const mt = Object.freeze([]);

export const useSearch = () => {
    const [query, setQuery] = React.useState(null);
    const [links, setLinks] = React.useState(mt);

    React.useEffect(() => {
        if (query === null) {
            return;
        }

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

    return [links, setQuery];
};

export default useSearch;
