import { useUnder } from "../../../features/util";
import { A, Card, H1 as UiH1, H2, Hgroup, Nav, SidebarLayout } from "../../../features/ui";
import { useFocus } from "../listeners.jsx";
import { layout, skipLink } from "./page.module.css";

const SkipLink = ({children, ...props}) => {
    const ref = useFocus();
    return <A className={skipLink} ref={ref} {...props}>{children}</A>;
};

const H1 = ({children, id, tabIndex = "-1", ...props}) => {
    const under = useUnder();
    id = id ?? (under ? null : "content");
    return <UiH1 tabIndex={tabIndex} id={id} {...props}>{children}</UiH1>;
};

export const PageLayout = ({
    children,
    heading,
    subheading,
    notice,
    mainbar,
    sidebar,
    breadcrumbs
}) =>
<div className={layout}>
    <SkipLink
        aria-describedby="content"
        href="#content">Skip to Content</SkipLink>
    <SidebarLayout
        sidebar={
            <>
                {sidebar}
                {
                    breadcrumbs &&
                        <Card>
                            <Nav heading={<H2>Breadcrumbs</H2>}>
                                {breadcrumbs}
                            </Nav>
                        </Card>
                }
            </>
        }
    >
        <Card>
            <main data-pagefind-body="" aria-describedby="content">
                <header>
                    <Hgroup>
                        <H1>{heading}</H1>
                        {subheading}
                    </Hgroup>
                    {notice}
                </header>
                {children}
            </main>
        </Card>
        {mainbar}
    </SidebarLayout>
</div>;

export default PageLayout;
