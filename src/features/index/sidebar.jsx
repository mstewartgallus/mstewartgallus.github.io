import { Card, Nav, H2 } from "../../features/ui";
import { Search } from "../../features/search";

export const Sidebar = ({children, search, breadcrumbs}) =>
<>
    {children}
    <Card>
        <Search heading={<H2>Search</H2>}>
            {search}
        </Search>
    </Card>
    <Card>
        <Nav heading={<H2>Breadcrumbs</H2>}>
            {breadcrumbs}
        </Nav>
    </Card>
</>;

export default Sidebar;
