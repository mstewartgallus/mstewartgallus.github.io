import { memo } from "react";
import { Layout } from "./layout";

const LayoutMemo = memo(Layout);

export const wrapPageElement = ({ element }) => <LayoutMemo>{element}</LayoutMemo>;
