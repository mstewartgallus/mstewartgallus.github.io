import { stack as stackClass } from "./error.module.css";

// stack is nonstandard
export const Error = ({message, name, stack}) =>
<article>
    <div>
        <h3>{name}</h3>
        <div>{message}</div>
    </div>
    {stack && <pre className={stackClass}>{stack}</pre>}
</article>;

export default Error;
