import type { ReactNode } from "react";
import { Html } from "./components/html/Html";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: Props) =>
    <StoreProvider>
        <Html lang="en">
            <body>
                 <main className={styles.main}>
                     {children}
                 </main>
            </body>
        </Html>
    </StoreProvider>;

export default RootLayout;
