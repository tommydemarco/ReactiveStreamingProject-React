import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import streamsReducer from "./streams";

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
});

export default rootReducer;
