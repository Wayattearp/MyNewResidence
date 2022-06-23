import { CHANGE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    bounds: {},
    minPrice: 1,
    maxPrice: 9999999
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    if (action.type === CHANGE_FILTER) {
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
    } else {
        return state;
    }
};

export default filtersReducer;
