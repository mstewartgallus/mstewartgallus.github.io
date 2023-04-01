import { A, Card, H1, H2, Hgroup, Nav, SidebarLayout } from "../../../features/ui";
import { useFocus } from "../listeners.jsx";
import { layout, skipLink } from "./page.module.css";

const SkipLink = ({children, ...props}) => {
    const ref = useFocus();
    return <A ref={ref} {...props}>{children}</A>;
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
        className={skipLink}
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
                        <H1 tabIndex="-1" id="content">{heading}</H1>
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
