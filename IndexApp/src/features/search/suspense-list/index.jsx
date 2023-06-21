import { memo, Suspense, createContext, useContext } from "react";
import { Ul, Li } from "@features/ui";

const FallbackContext = createContext();
FallbackContext.displayName = 'Fallback';

const FallbackProvider = FallbackContext.Provider;

const Fallback = () => useContext(FallbackContext);

const FallbackMemo = memo(Fallback);

export const SuspenseItem = ({children}) =>
<Li>
    <Suspense fallback={<FallbackMemo />}>
        {children}
    </Suspense>
</Li>;

export const SuspenseList = ({children, fallback}) =>
<Ul>
    <FallbackProvider value={fallback}>
        {children}
    </FallbackProvider>
</Ul>;
