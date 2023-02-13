import * as React from "react";
import { DescList, DescItem } from "./desc-list.jsx";

const Notices = ({notice}) => notice.map(n => <DescItem key={n}>{n}</DescItem>);

export const ListNotice = ({notice}) =>
<DescList desc="Notice">
    <Notices notice={notice} />
</DescList>;

export default ListNotice;
