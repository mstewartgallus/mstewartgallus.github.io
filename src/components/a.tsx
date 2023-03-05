import * as React from "react";
import { Link } from "gatsby";
import type { FC, AnchorHTMLAttributes } from "react";
import type { GatsbyLinkProps } from "gatsby";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

interface LinkProps extends Omit<AnchorProps, 'href'> {
    to: string
}

const toLinkProps: (props: AnchorProps) => LinkProps | null = props => {
    const { href, ...rest } = props;
    if (!href) {
        return null;
    }
    if (!href.startsWith("/")) {
        return null;
    }
    if (props.target) {
        return null;
    }
    if (props.download) {
        return null;
    }
    return ({ to: href, ...rest });
};

const AImpl = (
    props: AnchorProps,
    ref: React.Ref<HTMLAnchorElement>
) => {
    const linkProps = toLinkProps(props);
    if (linkProps) {
        return <Link innerRef={ref} {...linkProps} />;
    }
    return <a ref={ref} {...props} />;
};

export const A: FC<AnchorProps> = React.forwardRef(AImpl);

export default A;
