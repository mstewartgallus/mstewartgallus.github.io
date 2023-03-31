import { Suspense } from "react";
import { Theme } from "../../features/ui";
import { Loading } from "../../features/layout";

export {
    onPreRouteUpdate,
    onRouteUpdate,
    onRouteUpdateDelayed,
    shouldUpdateScroll
} from "../../features/layout";

export const wrapPageElement = ({ element, props }) => {
    return <Theme>
               <Suspense fallback={<Loading />}>
                   {element}
               </Suspense>
           </Theme>;
};
