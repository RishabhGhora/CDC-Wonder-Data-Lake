import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from 'react-router-dom';

import 'Styles/App.css';

import Graph	from 'Pages/Graph/Graph.js';
import Home 	from 'Pages/Home/Home.js';


// When using Switch component, precedence is taken from top to bottom
function App() {
	return (
		<Router>
			<Switch>
				<Route path={`/graph/:topicID`} component={Graph} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
