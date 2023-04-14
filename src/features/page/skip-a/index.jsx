import { focusRef } from "@features/focus";
import { A } from "@features/ui";
import { skipLink } from "./skip-a.module.css";

export const SkipA = props =>
<A id="skip-link"
   ref={focusRef}
   className={skipLink}
   {...props} />;
