import { H2 } from "@features/ui";

export const PanelServer = ({id, children, heading}) =>
<nav aria-labelledby={id}>
    <header>
        <hgroup>
            <H2 id={id}>
                {heading}
            </H2>
        </hgroup>
    </header>
    {children}
</nav>;

export default PanelServer;
