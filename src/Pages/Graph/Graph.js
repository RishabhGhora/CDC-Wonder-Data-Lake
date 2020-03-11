/*
	This is the top level of our Graph page. All requests to the backend will go through this
	page only. All filter updates come from our Filters component and its subsequent
	components.
	For simplification, we make all requests to the backend from here so that the flow of
	information goes from parent->child
*/

import React, { Component } from 'react';
// import { SphereSpinner } from 'react-spinners-kit';
// import { Button } from 'reactstrap';

import 'Styles/Graph.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase';
import 'firebase/storage';
import firebaseConfig from 'Firebase/firebase.js';

import Filters from		'Components/Filters/Filters.js'
import LineChart from	'Components/LineChart/LineChart.js';

firebase.initializeApp(firebaseConfig);

class Graph extends Component {
	constructor(props) {
		super(props)
		this.state = {
			topic: "",
		}
		const href = window.location.href;
		if (href != null) {
			const href_parts = href.split('/');
			this.state.topic = href_parts[href_parts.length - 1].replace(/[_]/, ' ');
		}
	}

	componentDidMount() {
		/*
		When component is mounted onto the page, initialize all of our stuff.
		1) Load in our Filters and LineChart components
		2) Make an initial query to the backend given our initial topic
		3) When query returns, send list of filters to the Filters component and data to be graphed
			to our LineChart component
		4) Look for changes to filters and make new queries when necessary, repeat from step (3)
		*/
	}

	makeRequest = (url) => {
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';
			xhr.onload = function(e){
				if (xhr.readyState === 4){
					if (xhr.status !== 200){
						console.error(xhr.statusText)
					}
				}
			}
			xhr.onreadystatechange = () => {
				var data = xhr.response;
				if (data != null) {
					// Split and send data to Filters and LineChart components
				}
			}
			xhr.open('GET', url);
			xhr.send();
	}

	clearFilters = () => {
		this.setState({
			
		})
	}

	filtersChanged = (filter_list) => {
		console.log(filter_list);
		
	}
	
	render() {
		const { data, topic }  = this.state;
	
		return (
			<div className="graphPage">
				<img className="logo" alt="CDC Logo" src={require('wonder-logo.png')} />
				<a href="/">
					<img className="home" alt="Home button" src={require('home.png')}  />
				</a>
				<div id="content">
					<h2>
						{'Trying to look at '+topic}
					</h2>
					<Filters filtersChanged={this.filtersChanged} />
					<LineChart className="graph" data={data} />
				</div>
			</div>
		);
	}
}

export default Graph;