import ErrorBoundary from "./error-boundary.jsx";
import Error from "./error";
import { parse } from "../utils/error.js";

export const Err = ({children}) =>
<ErrorBoundary
    fallback={e =>
        parse(e).map(({message, name, stack}) =>
            <Error message={message} name={name} stack={stack} />)
    }>
    {children}
</ErrorBoundary>;

export default Err;
