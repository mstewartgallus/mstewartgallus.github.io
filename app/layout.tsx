import type { ReactNode } from "react";
import { Page } from "@/features/page";
import { Body } from "@/ui";

import "./_ui/styles/globals.css";

interface Props {
    children: ReactNode;
}

const RootLayout = ({ children }: Readonly<Props>) =>
    <html lang="en">
       <Body>
         <Page>
           {children}
         </Page>
       </Body>
    </html>;

export default RootLayout;
