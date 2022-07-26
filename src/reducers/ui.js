import { fromJS } from "immutable";
import { actionTypes } from "../actions/types";

const initialState = fromJS({
    loading: false,
});

const uiReducerObj = (state, payload) => ({
    [actionTypes.SET_LOADING]: state.setIn(['loading'], payload),
});

const uiReducer = (state = initialState, action) => (
    uiReducerObj(state, action.payload)[action.type] || state
);

export { uiReducer };