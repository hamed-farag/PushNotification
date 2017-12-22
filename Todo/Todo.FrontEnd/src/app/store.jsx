import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

export default createStore(
	reducer,
	applyMiddleware(
		promise
	)
);