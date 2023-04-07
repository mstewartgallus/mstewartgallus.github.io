import { UnderProvider } from "../../../features/util";
import { Overlay, OverlayItem } from "../../../features/ui";

export const OverlayLayout = ({children, previous}) =>
<Overlay>
    {
        previous &&
            <OverlayItem inert="inert">
                <UnderProvider value={true}>
                    {previous}
                </UnderProvider>
            </OverlayItem>
    }
    <OverlayItem>
        {children}
    </OverlayItem>
</Overlay>;
