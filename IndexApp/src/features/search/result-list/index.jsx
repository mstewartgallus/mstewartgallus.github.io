import { lazy } from "react";
import { A, ClickTrap } from "@features/ui";
import { SuspenseList, SuspenseItem } from "../suspense-list";

const Suspend = lazy(() => new Promise(r => {}));

const Result = ({loaded, url, title}) => {
    if (!loaded) {
        return <Suspend />;
    }
    return <A href={url}>{title}<ClickTrap /></A>;
};

const Loading = () =>
<A role="link" aria-disabled="true">Loading...</A>;

export const ResultList = ({links}) =>
<SuspenseList fallback={<Loading />}>
    {
        links.map(link =>
            <SuspenseItem key={link.id}>
                <Result {...link} />
            </SuspenseItem>)
    }
</SuspenseList>;
