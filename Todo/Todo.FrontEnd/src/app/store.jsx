import reducer from './reducers';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import promise from 'redux-promise';

let enhancer;

if (!__PRODUCTION__) {
	const createLogger = require('redux-logger');
	const logger = createLogger();

	enhancer = compose(
		applyMiddleware(
			promise,
			logger
		),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	);
} else {
	enhancer = compose(
		applyMiddleware(
			promise
		)
	);
}
export default createStore(
	reducer,
	enhancer
);