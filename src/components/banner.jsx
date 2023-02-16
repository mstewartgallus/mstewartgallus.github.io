import * as React from "react";
import A from "./a.jsx";

export const Banner = props =>
<ul {...props}>
    <li><a type="application/atom+xml" rel="alternate" href="/feed.xml">Subscribe</a></li>
    <li><A rel="author" href="/about">About the Author</A></li>
</ul>;

export default Banner;
