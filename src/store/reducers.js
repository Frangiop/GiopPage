import { combineReducers } from "redux";
import CollectionsReducer from "./collections/reducer";
 import DigitalartsReducer from "./arteDigital/reducer";

const rootReducer = combineReducers({
    CollectionsReducer,
    DigitalartsReducer
})

export default rootReducer