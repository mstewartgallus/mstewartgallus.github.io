import { Card, H2 } from "../../features/ui";
import { Search } from "../../features/search";

export const Sidebar = ({children, search}) =>
<>
    {children}
    <Card>
        <Search heading={<H2>Search</H2>}>
            {search}
        </Search>
    </Card>
</>;

export default Sidebar;
