import { Suspense, createContext, useContext } from "react";

const FallbackContext = createContext();

export const Fallback = () => {
    const fallback = useContext(FallbackContext);
    return <li>{fallback}</li>;
};

export const SuspenseItem = ({children}) =>
<Suspense fallback={<Fallback />}>
    <li>{children}</li>
</Suspense>;

export const SuspenseList = ({children, fallback}) =>
<ul>
    <FallbackContext.Provider value={fallback}>
        {children}
    </FallbackContext.Provider>
</ul>;
