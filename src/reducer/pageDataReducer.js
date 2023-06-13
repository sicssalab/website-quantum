import initialState from "./initialState";
import types from "../constants/reducers/pageDataConstants";

const pageDataReducer = (state = initialState.pageData, action) => {
    const auxState = action.pageData;

    switch(action.type) {
        case types.PAGE_DATA_FETCHING:
            return {...initialState.pageData, ...auxState}
            //return {...initialState.pageData, ...action.pageData}
        case types.PAGE_DATA:
            return auxState;
        case types.PAGE_DATA_ERROR:
            return auxState;
        default:
            return state;
    }
}

export default pageDataReducer;