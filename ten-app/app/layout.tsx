import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: Props) =>
<html lang="en">
    <body>
        <StoreProvider>
            <section className={styles.container}>
                <Nav />

                <header className={styles.header}>
                    Header
                </header>

                <main className={styles.main}>{children}</main>

                <footer className={styles.footer}>
                    <span>Footer</span>
                </footer>
            </section>
        </StoreProvider>
    </body>
</html>;

export default RootLayout;
