import initialState from "./initialState";
import types from "../constants/reducers/routesDataConstants";
const routesDataReducer = (state = initialState.routesData, action) => {
    const auxState = action.routesData;
    switch(action.type) {
        case types.ROUTES_DATA_FETCHING:
            return {...initialState.routesData, ...auxState}
            //return {...initialState.routesData, ...action.routesData}
        case types.ROUTES_DATA:
            return auxState;
        case types.ROUTES_DATA_ERROR:
            return auxState;
        default:
            return state;
    }
}

export default routesDataReducer;