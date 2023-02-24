import * as React from "react";
import { stack as stackClass, url as urlClass } from "./error.module.css";

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

const parseStack = stack => {
    if (!stack) {
        return [];
    }
    const lines = stack.trim().split("\n");
    return lines.map(entry => {
        const [ign, line, col] = entry.match(/:(\d+):(\d+)$/);
        const nolinecol = entry.replace(/:(\d+):(\d+)$/, '');
        let [ign2, method] = nolinecol.match(/^([^@]*)@/);
        const url = nolinecol.replace(/^([^@]*)@/, '');
        if (method === '') {
            method = null;
        }
        return {method, url, line, col};
    });
};

// There is no standard format here
const Stack = ({stack}) => <table className={stackClass}>{
    stack.map(({method, url, line, col}) =>
        <tbody>
            <tr><td><code>{method}</code></td><td>{line}</td><td>{col}</td></tr>
            <tr><td colSpan="3"><code className={urlClass}>{url}</code></td></tr>
        </tbody>)
}</table>;


const EachError = ({error}) => {
    const {
        message, name,
        stack
    } = error;

    const k = parseStack(stack);

    return <article>
               <div>
                   <h3>{name}</h3>
                   <div>{message}</div>
               </div>
               {k && <Stack stack={k} />}
           </article>;
};

export const Error = ({error}) => {
    if (!error.cause) {
        return <EachError error={error} />;
    }

    const errors = flatten(error);
    return <ol>{
        errors.map(error => <li><EachError error={error} /></li>)
    }</ol>;
};

export default Error;
