import * as React from "react";
import favicon from '../images/favicon.svg';

export const HeadBasic = () =>
<>
    <link rel="icon" href={favicon} />
    <meta name="color-scheme" content="dark light" />
    <meta name="theme-color" content="#6000A0" />
</>;

export default HeadBasic;
