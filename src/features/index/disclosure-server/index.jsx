import { H2 } from "@features/ui";

export const DisclosureServer = ({id, children, heading}) =>
<nav aria-labelledby={id}>
    <header>
        <hgroup>
            <H2 tabIndex="-1" id={id}>
                {heading}
            </H2>
        </hgroup>
    </header>
    {children}
</nav>;

export default DisclosureServer;
