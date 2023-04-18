const loop = function *loop(ix, key, value) {
    if (typeof value === 'string') {
        yield [ix, key, value];
        return;
    }

    if (Array.isArray(value)) {
        let ii = 0;
        for (const x of value) {
            for (const l of loop(`${ix}${ii}`, key, x)) {
                yield l;
            }
            ++ii;
        }
        return;
    }

    for (const [k, v] of Object.entries(value)) {
        const prop = key ? `${key}:${k}` : k ;
        const newix = key ? `${ix}:${k}` : k ;
        for (const l of loop(newix, prop, v)) {
            yield l;
        }
    }
};

export const flatten = function*(value) {
    for (const l of loop(null, null, value)) {
        yield l;
    }
};
