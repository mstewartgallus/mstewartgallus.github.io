"use client";

import NextLink from "next/link";

type LinkProps = Parameters<typeof NextLink>[0];

// FIXME use usePathname to set aria-current="page" and remove href to
// deactivate link
export const Link = (props: LinkProps) => {
    return <NextLink {...props} />;
};
