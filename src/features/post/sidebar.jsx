import { Card, Footer, Nav, H2 } from "../../features/ui";

export const Sidebar = ({children, paging, metadata, breadcrumbs}) =>
<>
    {children}
    <Card>
        <Nav heading={<H2>Paging</H2>}>
            {paging}
        </Nav>
    </Card>
    <Card>
        <Footer heading={<H2>Metadata</H2>}>
            {metadata}
        </Footer>
    </Card>
    <Card>
        <Nav heading={<H2>Breadcrumbs</H2>}>
            {breadcrumbs}
        </Nav>
    </Card>
</>;

export default Sidebar;
