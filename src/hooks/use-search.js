import * as React from 'react';
import * as Pagefind from '../utils/pagefind.js';

const reducer = (state, action) => {
    switch (action.type) {
    case "init":
        return action.links;

    case "load": {
        const { index, url, title } = action;
        const { id } = state[index];
        const links = Array.from(state);
        links[index] = { id, result: { url, title } };
        return links;
    }

    default:
        return state;
    }
};

const parseParams = search => {
    const params = new URLSearchParams(search);
    let s = params.get('s');
    if (s === '') {
        s = null;
    }
    const category = new Set(params.getAll('category'));
    const tag = new Set(params.getAll('tag'));
    const place = new Set(params.getAll('place'));
    const person = new Set(params.getAll('person'));
    return { s, category, tag, place, person };
};

export const useSearch = (search, n) => {
    const [links, dispatch] = React.useReducer(reducer, null);

    React.useEffect(() => {
        if (!search) {
            return;
        }

        let {s, category, tag, place, person} = parseParams(search);
        const filters = {
            ...(category.size > 0 ? { category: Array.from(category) } : null),
            ...(tag.size > 0 ? { tag: Array.from(tag) } : null),
            ...(place.size > 0 ? { place: Array.from(place) } : null),
            ...(person.size > 0 ? { person: Array.from(person) } : null),
        };

        let ignore = false;
        (async () => {
            const data = await Pagefind.search(s, { filters });
            if (ignore) {
                return;
            }

            const posts = data.results.slice(0, n);

            const links = posts.map(({ id }) => ({ id }));
            dispatch({ type:"init", links });

            await Promise.all(posts.map(async (post, index) => {
                const data = await post.data();
                if (ignore) {
                    return;
                }

                const { url, meta: { title } } = data;

                dispatch({ type:"load", index, url, title });
            }));
        })();
        return () => ignore = true;
    }, [search, n]);

    return links;
};

export default useSearch;
