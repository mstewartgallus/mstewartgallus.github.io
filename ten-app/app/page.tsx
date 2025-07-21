import type { Metadata } from "next";
import { TenThings } from "./_components/ten-things/TenThings";

const IndexPage = () => <TenThings />;

export default IndexPage;

export const metadata: Metadata = {
  title: "Ten Things"
};
