import { combineReducers } from "redux";
import {initReducer} from "./initReducer"
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  init: initReducer,
  form: formReducer
});
