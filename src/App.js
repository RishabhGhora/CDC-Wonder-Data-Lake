import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from 'react-router-dom';

import 'Styles/App.css';
import Graph  	from 'Pages/Graph/Graph.js';
import Home 		from 'Pages/Home/Home.js';


// When using Switch component, precedence is taken from top to bottom
function App() {
  return (
  	<Router>
	    <Switch>
	    	<Route path="/graph">
	    		<Graph />
	    	</Route>
	    	<Route path="/">
	    		<Home />
	    	</Route>
	    </Switch>
    </Router>
  );
}

export default App;
