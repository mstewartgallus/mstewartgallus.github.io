import * as mdx from "@/features/mdx";
import * as page from "./_ui/not-found.mdx";

export const metadata = mdx.toMetadata(page);
export default mdx.toPage(page);
