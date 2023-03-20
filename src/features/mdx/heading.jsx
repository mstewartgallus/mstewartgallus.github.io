import { useId } from "react";
import { A } from "../../features/ui";
import {
    H1 as UiH1, H2 as UiH2, H3 as UiH3,
    H4 as UiH4, H5 as UiH5, H6 as UiH6
} from "../../features/ui";

const AutoLink = ({to, ...props}) => {
    const href = `#${to}`;
    return to &&
        <>
            &emsp;
            <A {...props} href={href}>#</A>
        </>;
};

const createAutoLink = Hn =>
      function HeadingAutoLink({id, children, ...props}) {
          const textId = useId();
          return <Hn {...props} id={id}>
                     <span role="presentation" id={textId}>{children}</span>
                     <AutoLink to={id} aria-describedby={textId}>#</AutoLink>
                 </Hn>;
      };

export const H1 = UiH1;
export const H2 = createAutoLink(UiH2);
export const H3 = createAutoLink(UiH3);
export const H4 = createAutoLink(UiH4);
export const H5 = createAutoLink(UiH5);
export const H6 = createAutoLink(UiH6);
