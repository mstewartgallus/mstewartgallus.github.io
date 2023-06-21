import { Dl, DlDiv, Dt, Dd } from "@features/ui";

export const ListNotice = ({notice}) =>
<Dl>
    <DlDiv>
        <Dt>Notice</Dt>
        {
            notice.map(n =>
                <Dd key={n}>{n}</Dd>
            )
        }
    </DlDiv>
</Dl>;
