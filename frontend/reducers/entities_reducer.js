import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import housesReducer from "./houses_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    houses: housesReducer
});

export default entitiesReducer;