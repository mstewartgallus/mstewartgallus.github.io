import { Suspense, createContext, useContext } from "react";
import { Ul, Li } from "../../../../features/ui";


const FallbackContext = createContext();
FallbackContext.displayName = 'Fallback';

export const Fallback = () => {
    const fallback = useContext(FallbackContext);
    return <Li>{fallback}</Li>;
};

export const SuspenseItem = ({children}) =>
<Suspense fallback={<Fallback />}>
    <Li>{children}</Li>
</Suspense>;

export const SuspenseList = ({children, fallback}) =>
<Ul>
    <FallbackContext.Provider value={fallback}>
        {children}
    </FallbackContext.Provider>
</Ul>;
