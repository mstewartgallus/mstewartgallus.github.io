import { Assistive } from "@features/util";
import { Search } from "@features/polyfill";
import { Hgroup, Card, H2 } from "@features/ui";

export const Sidebar = ({children, search}) =>
<>
    {children}
    <Card>
        <Search aria-describedby="search">
            <Assistive>
                <header>
                    <Hgroup>
                        <H2 id="search">Search</H2>
                    </Hgroup>
                </header>
            </Assistive>
            {search}
        </Search>
    </Card>
    </>;

export default Sidebar;
