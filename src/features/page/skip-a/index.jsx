import { useFocus } from "@features/focus";
import { SubtleA } from "@features/ui";

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
    const ref = useFocus();
    return <SubtleA onKeyDown={onKeyDown} {...props} ref={ref} />;
};
