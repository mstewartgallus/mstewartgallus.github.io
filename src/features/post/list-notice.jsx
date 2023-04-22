import { useId } from "react";
import { Set, SetItem } from "./set";

export const ListNotice = ({notice}) => {
    const id = useId();
    return <div role="presentation">
        <span id={id}>Notice</span>
        <Set aria-labelledby={id}>
            {
                notice.map(n =>
                    <SetItem key={n} aria-describedby={id}>
                        {n}
                    </SetItem>
                )
            }
        </Set>
    </div>;
};
