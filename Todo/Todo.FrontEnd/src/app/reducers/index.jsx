import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todo from './todo';

const rootReducer = combineReducers({
    todo,
    routerReducer
});

export default rootReducer;
