import { useCallback } from "react";
import { navigate } from "../features/util";

export const useSubmit = () => {
    return useCallback(async event => {
        const nativeEvent = event.nativeEvent;
        const form = event.target;
        const submitter = nativeEvent.submitter;

        let action = submitter.getAttribute('formaction');
        let enctype = submitter.getAttribute('formenctype');
        let method = submitter.getAttribute('formmethod');
        let target = submitter.getAttribute('formtarget');

        action ??= form.getAttribute('action');
        enctype ??= form.getAttribute('enctype');
        method ??= form.method;
        target ??= form.getAttribute('target');

        if (enctype !== null) {
            return;
        }
        if (method !== 'get') {
            return;
        }
        if (target !== null) {
            return;
        }

        event.preventDefault();

        const search = new URLSearchParams(new FormData(form));

        const url = `${action}?${search}`;

        // FIXME what if external url ?
        await navigate(url);
    }, []);
};

export default useSubmit;
