// There is no standard format here

const flatten = error => {
    const errors = [];
    for (;;) {
        errors.push(error);
        const { cause } = error;
        if (!cause) {
            break;
        }
    }
    return errors;
};

export const parse = error => flatten(error);

export default parse;
