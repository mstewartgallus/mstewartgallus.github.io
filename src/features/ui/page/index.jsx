import { SidebarLayout } from "../sidebar-layout";
import { Theme } from "../theme";
import { Viewport } from "../viewport";
import { layout } from "./page.module.css";

export const Page = ({children, sidebar}) =>
<Theme>
    <Viewport>
        <div className={layout}>
            <SidebarLayout sidebar={sidebar}>
                {children}
            </SidebarLayout>
        </div>
    </Viewport>
</Theme>;

export default Page;
