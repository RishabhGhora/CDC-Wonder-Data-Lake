import React, { Component } from 'react';
// import './Home.css';

class Home extends Component {

	searchOnClick() {
		
	}

	render() {
		return (
			<div>
				<input type="text" id="search" placeholder="What would you like to know?" />
				<button type="button">
					<a href="/graph">
						Search
					</a>
				</button>
			</div>
		)
	}
}

export default Home;