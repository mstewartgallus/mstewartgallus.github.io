import { ScreenOnly } from "@features/util";
import { Footer, Nav, H2 } from "@features/ui";

export const Sidebar = ({children, paging, metadata}) =>
<>
    {children}
    <ScreenOnly>
        <Nav heading={<H2 tabIndex="-1" id="paging">Paging</H2>}>
            {paging}
        </Nav>
    </ScreenOnly>
    <Footer heading={<H2 tabIndex="-1" id="metadata">Metadata</H2>}>
        {metadata}
    </Footer>
</>;
