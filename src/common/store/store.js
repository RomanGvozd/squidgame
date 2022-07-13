import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import languageReducer from "./language/reducer";

const root = combineReducers({
    language: languageReducer,

});

export const store = createStore(root, applyMiddleware(thunk))