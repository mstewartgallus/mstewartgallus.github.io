import { memo } from "react";
import { ViewTransition } from "@features/view-transition";
import { Layout } from "./layout";

const LayoutMemo = memo(Layout);

export const wrapPageElement = ({ element }) =>
<>
    <LayoutMemo>{element}</LayoutMemo>
    <ViewTransition />
</>;
