import { focusRef } from "@features/focus";
import { A } from "@features/ui";
import { content } from "./skip-a.module.css";

const onKeyDown = e => {
    const { target, key, keyCode, isComposing } = e;

    if (isComposing || keyCode === 229) {
        return;
    }

    if (key === 'Escape' || key === 'Esc' || keyCode === 27) {
        e.preventDefault();
        target.blur();
    }
};

export const SkipA = props => {
    return <A className={content} id="skip-link" href="#content"
              onKeyDown={onKeyDown}
              {...props} ref={focusRef} />;
};
