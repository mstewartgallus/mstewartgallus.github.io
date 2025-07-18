import type { Metadata } from "next";
import { Ten } from "./components/ten/Ten";

const IndexPage = () => <Ten />;

export default IndexPage;

export const metadata: Metadata = {
  title: "Ten Things"
};
