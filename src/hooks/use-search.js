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
    if (!query) {
        return null;
    }

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

const useSearchEffect = query => {
    const truthy = !!query;
    const s = query?.[0];
    const opts = query?.[1];
    const sort = opts?.sort;
    const filters = opts?.filters;

    const [links, setLinks] = React.useState(mt);
    React.useEffect(() => {
        if (!truthy) {
            return;
        }

        const [signaled, setSignal] = signal();
        const maybe = ps => Promise.any([ps, signaled]);

        (async () => {
            const data = await maybe(Pagefind.search(s, { sort, filters }));
            if (!data) {
                return;
            }

            const posts = await maybe(Promise.all(
                data.results.slice(0, 10)
                    .map(r => r.data())));

            if (!posts) {
                return;
            }

            setLinks(posts);
        })();

        return setSignal;
    }, [truthy, s, sort, filters]);
    return links;
};

export const useSearch = query => {
    const q = React.useMemo(() => pagefindQuery(query), [query]);
    const links = useSearchEffect(q);
    return React.useMemo(() => links.map(pagefindToPost), [links]);
};

export default useSearch;
