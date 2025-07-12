import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: Props) =>
<html lang="en">
    <body>
        <StoreProvider>
           <main className={styles.main}>{children}</main>
        </StoreProvider>
    </body>
</html>;

export default RootLayout;
