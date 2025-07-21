import type { Metadata } from "next";

import { CompleteThings } from "../_components/complete-things/CompleteThings";

const CompletePage = () => <CompleteThings />;

export default CompletePage;

export const metadata: Metadata = {
  title: "Complete Things"
};
