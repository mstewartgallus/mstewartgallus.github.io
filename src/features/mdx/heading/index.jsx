import {
    SubtleA, Hgroup,
    H1 as UiH1, H2 as UiH2, H3 as UiH3,
    H4 as UiH4, H5 as UiH5, H6 as UiH6
} from "@features/ui";
import { heading } from "./heading.module.css";

const createAutoLink = Hn => {
    const name = Hn.displayName || Hn.name || 'Component';
    const HeadingAutoLink = ({ children, id, ...props }) => {
        const href = id ? `#${id}` : null;
        return <header className={heading}>
                   <Hgroup>
                       <Hn {...props}>
                           <SubtleA id={id} href={href}>
                               {children}
                           </SubtleA>
                       </Hn>
                   </Hgroup>
               </header>;
    };
    HeadingAutoLink.displayName = `createAutoLink(${name})`;
    return HeadingAutoLink;
};

export const H1 = UiH1;
export const H2 = createAutoLink(UiH2);
export const H3 = createAutoLink(UiH3);
export const H4 = createAutoLink(UiH4);
export const H5 = createAutoLink(UiH5);
export const H6 = createAutoLink(UiH6);
