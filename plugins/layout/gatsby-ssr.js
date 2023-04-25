import { Layout } from "@features/layout";

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
