import { useId } from "react";
import { ScreenOnly } from "@features/util";
import { A, Column, Card, H2, Nav, Set, SetItem } from "@features/ui";
import { SupportLayout } from "../support-layout";
import { common } from "./standard.module.css";

const Common = ({children, heading}) => {
    const id = useId();
    return <header aria-describedby={id}>
               <Card>
                   <span id={id} className={common}>{heading}</span>
                   {children}
               </Card>
           </header>;
};

export const StandardLayout = ({
    children,
    support,
    navigation,
    breadcrumbs
}) =>
<Column>
    <SupportLayout
        support={
            <>
                {navigation}
                {support}
                <ScreenOnly>
                    <Nav heading={<H2>Breadcrumbs</H2>}>
                        {breadcrumbs}
                    </Nav>
                </ScreenOnly>
            </>
        }>
        {children}
    </SupportLayout>
</Column>;
