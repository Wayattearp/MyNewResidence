import { fetchAllHouses } from "./houses_actions";

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS";
export const CLEAR_FILTER = "CLEAR_FILTER";


export const changeFilter = (filter, value) => {
    return {
        type: CHANGE_FILTER,
        filter,
        value,
    };
};

export const clearFilter = (filter) => {
    return {
        type: CLEAR_FILTER,
        filter,
    };
};

export const clearAllFilters = () => {
    return {
        type: CLEAR_ALL_FILTERS,
    };
};

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchAllHouses(getState().ui.filters)(dispatch);
};

export function removeFilter(filter) {
    return (dispatch, getState) => {
        dispatch(clearFilter(filter));
        return fetchAllHouses(getState().ui.filters)(dispatch);
    };
}

export function removeAllFilters() {
    return (dispatch, getState) => {
        dispatch(clearAllFilters());
        return fetchAllHouses(getState().ui.filters)(dispatch);
    };
}
