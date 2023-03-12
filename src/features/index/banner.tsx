import { A } from "../../features/ui";
import type { FC } from "react";

export interface BannerProps {
}

export const Banner: FC<BannerProps> = () =>
<ul>
    <li><a type="application/atom+xml" rel="alternate" href="/feed.xml">Subscribe</a></li>
    <li><A rel="author" href="/about">About the Author</A></li>
    <li><A href="/README">About this Blog</A></li>
</ul>;

export default Banner;
