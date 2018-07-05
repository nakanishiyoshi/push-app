import { combineReducers } from 'redux';
import promotion from './promotion';
import { reducer as form } from 'redux-form';

export default combineReducers({
    promotion,
    form
});
