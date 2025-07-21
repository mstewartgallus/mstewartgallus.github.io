import type { ReactNode } from "react";
import { Link } from "@/components/link/Link";
import { Html } from "@/components/html/Html";
import { StoreProvider } from "./_components/StoreProvider";

import "./_styles/globals.css";
import styles from "./_styles/layout.module.css";

const Nav = () => {
    return <nav className={styles.nav}>
        <Link href="/">Fresh</Link>
        <Link href="/complete">Complete</Link>
        </nav>;
};

interface Props {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: Props) =>
    <StoreProvider>
        <Html lang="en">
            <body>
                 <Nav />
                 <main className={styles.main}>
                     {children}
                 </main>
            </body>
        </Html>
    </StoreProvider>;

export default RootLayout;
