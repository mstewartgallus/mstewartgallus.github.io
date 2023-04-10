import { Suspend } from "@features/util";
import { A } from "@features/ui";
import { SuspenseList, SuspenseItem } from "../../components/suspense-list";

const Result = ({loaded, url, title}) => {
    if (!loaded) {
        return <Suspend />;
    }
    return <A href={url}>{title}</A>;
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

export default ResultList;
