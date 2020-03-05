import React, { Component } from 'react';
import { SphereSpinner } from 'react-spinners-kit';
import { Button } from 'reactstrap';

import 'Styles/Graph.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase';
import 'firebase/storage';	
import firebaseConfig from '../../Firebase/firebase.js';

import Subcategory from   	'Components/Filters/Components/Subcategory/Subcategory.js';
import Location from		'Components/Filters/Components/Location/Location.js';
import Dates from         	'Components/Dates/Dates.js';
import Demographics from  	'Components/Filters/Components/Demographic/Demographic.js';
import LineChart from     	'Components/LineChart/LineChart.js';

firebase.initializeApp(firebaseConfig);

class Graph extends Component {
	constructor(props) {
		super(props)
		this.state = {
			location: 'All States',
			type: 'All Cancer',
			year: '2018',
			allStates: null,
			georgia: null,
			california: null,
			twenty10: null,
			lung: null,
			data: null,
			cases: {},
		}
}

componentDidMount() {
	const storage = firebase.storage();
	const storageRef = storage.ref();    
	storageRef.child('data/allStates.json').getDownloadURL().then(url => {
		this.makeRequest(url)
	});
	storageRef.child('data/georgia.json').getDownloadURL().then(url => {
		this.makeRequest(url)
	});
	storageRef.child('data/california.json').getDownloadURL().then(url => {
		this.makeRequest(url)
	});
	storageRef.child('data/2010.json').getDownloadURL().then(url => {
		this.makeRequest(url)
	});
	storageRef.child('data/lung.json').getDownloadURL().then(url => {
		this.makeRequest(url)
	});
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
				
			}
		}
		xhr.open('GET', url);
		xhr.send();
}

clearFilters = () => {
	this.setState({
		location: 'All States',
		type: 'All Cancer',
		year: '2018',
		data: this.state.allStates,
	})
}

	
	render() {
		console.log(this.state);
		const { location, type, data, year }  = this.state;
	
		return (
			<div class="graphPage">
				<img class="logo" alt="CDC Logo" src={require('wonder-logo.png')} />
				<a href="/">
					<img class="home" alt="Home button" src={require('home.png')}  />
				</a>
				<h1 class="graph-title">{type} Cases in {location}</h1>
				<h2 class="graph-year">{year}</h2>
				<LineChart class="graph" data={data} />
				<Button color="primary" class="export-button" style={{ fontSize: '20px', height: '45px', marginBottom: '1rem', width: '200px', textAlign: 'center'}}>
					Export 
				</Button> 
				<Button color="primary" class="clear-button" onClick={this.clearFilters} style={{ fontSize: '20px', height: '45px', marginBottom: '1rem', width: '200px', textAlign: 'center'}}>
					Clear 
				</Button> 
				<Subcategory updateType = {this.updateType} />
				<Location updateLocation = {this.updateLocation1}/>
				<Dates updateYear = {this.updateYear}/>
				<Demographics />
				{ data == null ? <div class="loader"><SphereSpinner 
								size={50}
								color="#2980b9"
								loading={true}
						/></div> : null}
			</div>
		);
	
 
	}

}

export default Graph;