import { Focus } from "@features/focus";
import { ViewTransition } from "@features/view-transition";
import { Layout } from "./layout";

export const wrapPageElement = ({ element }) =>
<>
    <Layout>{element}</Layout>
    <Focus />
    <ViewTransition />
</>;
