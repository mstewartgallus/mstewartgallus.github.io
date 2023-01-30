import * as Redux from "redux";

const NAVIGATE = 'NAVIGATE';

const initialState = {
    page: {
        location: "/",
        data: {}
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case NAVIGATE: {
        const { location, data } = action;
        return { ...state,
                 page: { location, data }
               };
    }

    default:
        return state;
    }
};

export const createStore = () => Redux.createStore(reducer);

export const navigate = ({location, data}) =>
({ type: NAVIGATE, location, data });
