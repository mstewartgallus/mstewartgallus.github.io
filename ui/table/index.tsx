import type { JSX } from "react";
import { elementWithClass } from "@/features/util";
import styles from "./table.module.css";

export const Table = (props: JSX.IntrinsicElements['table']) =>
    <div className={styles.wrapper}>
        <table role="table" className={styles.table} {...props} />
    </div>;

export const Thead = (props: JSX.IntrinsicElements['thead']) =>
    <thead role="rowgroup" className={styles.thead} {...props} />

export const Tfoot = (props: JSX.IntrinsicElements['tfoot']) =>
    <tfoot role="rowgroup" className={styles.tfoot} {...props} />

export const Tbody = (props: JSX.IntrinsicElements['tbody']) =>
    <tbody role="rowgroup" className={styles.tbody} {...props} />

export const Tr = (props: JSX.IntrinsicElements['tr']) =>
    <tr role="row" className={styles.tr} {...props} />

export const Th = (props: JSX.IntrinsicElements['th']) => {
    const { scope } = props;
    const role =
          scope === 'row' ? 'rowheader' :
          scope === 'col' ? 'columnheader' :
          undefined;
    return <th role={role} className={styles.th} {...props}>
               <div className={styles.cell}>{props.children}</div>
           </th>;
};

export const Td = (props: JSX.IntrinsicElements['td']) =>
    <td role="cell" className={styles.td} {...props}>
        <div className={styles.cell}>{props.children}</div>
    </td>

export const Colgroup = elementWithClass('colgroup', styles.colgroup);
export const Col = elementWithClass('col', styles.col);

export const Caption = (props: JSX.IntrinsicElements['caption']) =>
    <caption role="caption" className={styles.caption} {...props} />
