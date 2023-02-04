import * as React from "react";
import { Link } from "gatsby";

export const Banner = props =>
<ul {...props}>
    <li><a type="application/atom+xml" rel="alternate" href="/feed.xml">Subscribe</a></li>
    <li><Link rel="author" to="/about">About the Author</Link></li>
</ul>;

export default Banner;
