import { combineReducers } from 'redux';
import RequestReducer from './RequestReducer';

//just for test
export default combineReducers({
  request: RequestReducer,
});
