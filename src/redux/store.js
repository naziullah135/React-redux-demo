import { createStore } from "redux";
import cakeReducer from "./rootReducer";

const store = createStore(cakeReducer)

export default store