import { fetchAllHouses } from "./houses_actions";

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_ALL_FILTER = "CLEAR_ALL_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";


export const changeFilter = (filter, value) => {
    // debugger
    return {
        type: UPDATE_FILTER,
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
        type: CLEAR_ALL_FILTER,
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
