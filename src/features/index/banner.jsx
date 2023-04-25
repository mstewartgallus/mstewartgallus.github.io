import { A, ClickTrap, Ul, Li } from "@features/ui";

export const Banner = () =>
<Ul>
    <Li><A download="feed.xml" rel="alternate" href="/feed.xml">Subscribe (RSS)<ClickTrap /></A></Li>
    <Li><A rel="author" href="/about/">About the Author<ClickTrap /></A></Li>
    <Li><A href="/README">About this Blog<ClickTrap /></A></Li>
</Ul>;
