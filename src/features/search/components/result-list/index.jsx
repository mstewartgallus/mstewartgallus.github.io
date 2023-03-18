import { Suspense } from "react";
import { Suspend } from "../../../../features/util";
import { A } from "../../../../features/ui";

const Result = ({url, title}) => <A href={url}>{title}</A>;
const MaybeResult = ({result}) => {
    if (!result) {
        return <Suspend />;
    }
    return <li>
               <Result {...result}/>
           </li>;
};

const Loading = () =>
<li>
    <A role="link" aria-disabled="true">Loading...</A>
</li>;

const Results = ({links}) =>
      links.map(({id, result}) =>
          <Suspense key={id} fallback={<Loading />}>
              <MaybeResult result={result} />
          </Suspense>);

export const ResultList = ({links}) =>
<ul>
    <Results links={links} />
</ul>;

export default ResultList;
