import { forwardRef } from "react";
import { withClass } from "@features/util";
import { wrapper, table, thead, tfoot, tbody, tr, th, td, colgroup, col, caption, cell } from "./table.module.css";

export const Table = forwardRef((props, ref) =>
    <div className={wrapper}>
        <table role="table" className={table} {...props} ref={ref} />
    </div>
);
Table.displayName = `Table`;

export const Thead = forwardRef((props, ref) =>
    <thead role="rowgroup" className={thead} {...props} ref={ref} />
);
Thead.displayName = `Thead`;

export const Tfoot = forwardRef((props, ref) =>
    <tfoot role="rowgroup" className={tfoot} {...props} ref={ref} />
);
Tfoot.displayName = `Tfoot`;

export const Tbody = forwardRef((props, ref) =>
    <tbody role="rowgroup" className={tbody} {...props} ref={ref} />
);
Tbody.displayName = `Tbody`;

export const Tr = forwardRef((props, ref) =>
    <tr role="row" className={tr} {...props} ref={ref} />
);
Tr.displayName = `Tr`;

export const Th = forwardRef((props, ref) => {
    const { scope } = props;
    const role =
          scope === 'row' ? 'rowheader' :
          scope === 'col' ? 'columnheader' :
          null;
    return <th role={role} className={th} {...props} ref={ref} >
               <div className={cell}>{props.children}</div>
           </th>;
});
Th.displayName = 'Th';

export const Td = forwardRef((props, ref) =>
    <td role="cell" className={td} {...props} ref={ref}>
        <div className={cell}>{props.children}</div>
    </td>
);
Td.displayName = `Td`;

export const Colgroup = withClass('colgroup', colgroup);
export const Col = withClass('col', col);

export const Caption = forwardRef((props, ref) =>
    <caption role="caption" className={caption} {...props} ref={ref} />
);
Caption.displayName = `Caption`;
