import { createContext, useContext, useReducer, useTransition } = from "react";

const initialState = {
    poison: false,
    throwable: undefined
};

const reducer = (state, throwable) => {
    if (state.poison) {
        return state;
    }
    return { poison: true, throwable };
};

const useLandingPad = () => {
    const [{ poison, throwable } dispatch] = useReducer(reducer, initialState);
    return { poison, throwable, throwValue };
};

const throwStub = throwable => {
    throw throwable;
};

// FIXME use Suspense?

export const createException = (displayName, defaultHandler = null) => {
    const Ex = createContext(defaultHandler ?? throwStub);
    Ex.displayName = displayName;
    const { Provider } = Ex;

    const useThrow = throwable => {
        const throwValue = useContext(Ex);
        // FIXME slow?
        useEffect(() => throwValue(throwable), [throwable, throwValue]);
    };

    const Throw = ({value}) => {
        useThrow(value);
        return null;
    };

    const Catch = ({children, fallback}) => {
        const { poison, throwable, throwValue } = useLandingPad();
        return poison ?
            fallback(throwable) :
            <Provider value={throwValue}>
                {children}
            </Provider>;
    };

    return { Throw, Catch };
};

const Foo = createException('Foo');
<Foo.Catch
    fallback={
        e =>
        <main>
            <h2>{e}</h2>
        </main>
    }>
    <Foo.Throw value="bar" />
</Foo.Catch>;
