import * as React from 'react';

export const useClient = cb => {
    const [client, setClient] = React.useState(false);

    React.useEffect(() => {
        setClient(true);
    }, []);

    return client;
};

export default useClient;
