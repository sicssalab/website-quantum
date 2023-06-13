import locale from "./localeReducer";
import routesData from "./routesDataReducer";
import pageData from "./pageDataReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    locale,
    routesData,
    pageData
})

export default rootReducer;