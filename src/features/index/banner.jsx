import { A, Ul, Li } from "../../features/ui";

export const Banner = () =>
<Ul>
    <Li><A rel="alternate" href="/feed.xml">Subscribe (RSS)</A></Li>
    <Li><A rel="author" href="/about">About the Author</A></Li>
    <Li><A href="/README">About this Blog</A></Li>
</Ul>;

export default Banner;
