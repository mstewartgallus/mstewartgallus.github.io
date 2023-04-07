import { UnderProvider } from "../../../features/util";
import { Overlay, OverlayItem } from "../../../features/ui";

export const OverlayLayout = ({children, previous}) =>
<Overlay>
    <OverlayItem>
        {children}
    </OverlayItem>
    {
        previous &&
            <OverlayItem inert="inert">
                <UnderProvider value={true}>
                    {previous}
                </UnderProvider>
            </OverlayItem>
    }
</Overlay>;
