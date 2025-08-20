import { withClass } from "@/features/util";
import { wrapper, table, thead, tfoot, tbody, tr, th, td, colgroup, col, caption, cell } from "./table.module.css";

export const Table = (props) =>
    <div className={wrapper}>
        <table role="table" className={table} {...props} />
    </div>;

export const Thead = props =>
    <thead role="rowgroup" className={thead} {...props} />

export const Tfoot = props =>
    <tfoot role="rowgroup" className={tfoot} {...props} />

export const Tbody = props =>
    <tbody role="rowgroup" className={tbody} {...props} />

export const Tr = props =>
    <tr role="row" className={tr} {...props} />

export const Th = props => {
    const { scope } = props;
    const role =
          scope === 'row' ? 'rowheader' :
          scope === 'col' ? 'columnheader' :
          null;
    return <th role={role} className={th} {...props}>
               <div className={cell}>{props.children}</div>
           </th>;
};

export const Td = props =>
    <td role="cell" className={td} {...props}>
        <div className={cell}>{props.children}</div>
    </td>

export const Colgroup = withClass('colgroup', colgroup);
export const Col = withClass('col', col);

export const Caption = props =>
    <caption role="caption" className={caption} {...props} />
