function loop(key, value) {
    if (typeof value === 'string') {
        return [[key, value]];
    }

    if (Array.isArray(value)) {
        return value.flatMap(x => loop(key, x));
    }

    return Object.entries(value)
        .flatMap(([k, v]) => {
            const prop = key ? `${key}:${k}` : k ;
            return loop(prop, v);
        });
}

export const flatten = value => loop(null, value);

export default flatten;
