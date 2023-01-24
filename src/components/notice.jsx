import * as React from "react";

const Notice = ({notice}) =>
      notice && notice.length > 0 &&
    <dl>
        <div>
            <dt>Notice</dt>
            {
                notice.map(n => <dd key={n}>{n}</dd>)
            }
        </div>
    </dl>;

export default Notice;
