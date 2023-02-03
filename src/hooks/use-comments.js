import * as React from "react";

export const useComments = ({host, id}) => {
    const [comments, setComments] = React.useState(null);
    React.useEffect(() => {
        const abort = new AbortController();
        const signal = abort.signal;
        (async () => {
            const request = new Request(new URL(`/api/v1/statuses/${id}/context`, host),
                                        {
                                            signal,
                                            mode: 'cors'
                                        });

            try {
                const response = await fetch(request);
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }

                const json = await response.json();

                signal.throwIfAborted();

                const comments = json?.descendants ?? null;
                setComments(comments);
            } catch (err) {
                if (!(err instanceof DOMException)) {
                    throw err;
                }
                if (err.name !== 'AbortError') {
                    throw err;
                }
            }
        })();
        return () => abort.abort();
    }, [host, id]);

    return comments;
};


export default useComments;
