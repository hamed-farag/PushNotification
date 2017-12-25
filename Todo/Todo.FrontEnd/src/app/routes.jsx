import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from 'containers/App';
import Todo from 'containers/Todo';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={Todo} />
	</Route>
)
