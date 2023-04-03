import { Card, Footer, Nav, H2 } from "../../features/ui";

export const Sidebar = ({children, paging, metadata}) =>
<>
    {children}
    <Card>
        <Nav heading={<H2 id="paging" tabIndex="-1">Paging</H2>}>
            {paging}
        </Nav>
    </Card>
    <Card>
        <Footer heading={<H2 id="metadata" tabIndex="-1">Metadata</H2>}>
            {metadata}
        </Footer>
    </Card>
</>;

export default Sidebar;
