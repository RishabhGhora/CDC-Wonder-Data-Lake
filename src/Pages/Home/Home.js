import React, { Component } from 'react';

import 'Styles/Home.css';

import SearchBar from 'Components/SearchBar/SearchBar.js'

class Home extends Component {

	render() {
		return (
			<div>
				<img id="logo" alt="CDC WONDER logo." src={require('test_logo.svg')} />
				<SearchBar />
			</div>
		)
	}
}

export default Home;