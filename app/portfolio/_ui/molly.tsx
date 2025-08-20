import molly from "./molly.jpg";
import Image from "next/image";
import styles from "./molly.module.css";

// FIXME give alt text
export const Molly = () =>
<div className={styles.molly}>
    <picture className={styles.img}>
        <Image src={molly} alt="" width="400" height="400" />
    </picture>
</div>;
