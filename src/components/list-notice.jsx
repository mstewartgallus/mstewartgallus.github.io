import * as React from "react";

const Notices = ({notice}) => notice.map(n => <dd key={n}>{n}</dd>);

export const ListNotice = ({notice}) =>
notice && notice.length > 0 &&
    <dl>
        <div>
            <dt>Notice</dt>
            <Notices notice={notice} />
        </div>
    </dl>;

export default ListNotice;
