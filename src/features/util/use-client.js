import { useEffect, useState, useTransition } from "react";

export const useClient = () => {
    const [isPending, startTransition] = useTransition();
    const [client, setClient] = useState(false);
    useEffect(() => startTransition(() => setClient(true)), []);
    return client;
};

export default useClient;
