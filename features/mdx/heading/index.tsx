import type { ComponentType, JSX } from "react";
import {
    Header, Hgroup,
    H1A, H2A, H3A, H4A, H5A, H6A
} from "@/features/ui";

const wrap = <P extends JSX.IntrinsicAttributes,>(Hn: ComponentType<P>) => {
    const name = Hn.displayName || Hn.name || 'Component';
    const HeadingAutoLink = (props: P) =>
        <Header>
            <Hgroup>
                <Hn {...props} />
            </Hgroup>
        </Header>;
    HeadingAutoLink.displayName = `wrap(${name})`;
    return HeadingAutoLink;
};

export const H1 = wrap(H1A);
export const H2 = wrap(H2A);
export const H3 = wrap(H3A);
export const H4 = wrap(H4A);
export const H5 = wrap(H5A);
export const H6 = wrap(H6A);
