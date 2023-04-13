import { memo } from "react";
import { Focus } from "@features/focus";
import { ViewTransition } from "@features/view-transition";
import { Layout } from "./layout";

const LayoutMemo = memo(Layout);

export const wrapPageElement = ({ element }) =>
<>
    <LayoutMemo>{element}</LayoutMemo>
    <Focus />
    <ViewTransition />
</>;
