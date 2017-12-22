import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from 'containers/App';
import Main from 'containers/Main';

export default (
	<Route path="/Todo" component={App} >
		<IndexRoute component={Main} />
	</Route>
)
