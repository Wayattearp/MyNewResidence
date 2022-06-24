import {
    CHANGE_FILTER,
    CLEAR_ALL_FILTERS,
    CLEAR_FILTER,
} from "../actions/filter_actions";


const filtersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case CHANGE_FILTER:
            return { ...state, [action.filter]: action.value };
        case CLEAR_FILTER:
            const newState = { ...state };
            delete newState[action.filter];
            return newState;
        case CLEAR_ALL_FILTERS:
            return { bounds: state.bounds };
        default:
            return { ...state };
    }
};

export default filtersReducer;
