import { Search } from "@features/polyfill";
import { ScreenOnly } from "@features/util";
import { Hgroup, Card, H2 } from "@features/ui";

export const Sidebar = ({children, search}) =>
<>
    {children}
    <ScreenOnly>
        <Card>
            <Search aria-describedby="search">
                <header>
                    <Hgroup>
                        <H2 tabIndex="-1" id="search">Search</H2>
                    </Hgroup>
                </header>
                {search}
            </Search>
        </Card>
    </ScreenOnly>
</>;
