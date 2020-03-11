/*
Filters component. This component represents the entire left filter sidebar.
This component receives an object containing filters from our Graph page parent.

*/

import React, { Component } from 'react';

import Subcategory from './Components/Subcategory/Subcategory.js';
import Location from './Components/Location/Location.js';
import Dates from './Components/Dates/Dates.js';
import Demographic from './Components/Demographic/Demographic.js';

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			callback: props.filtersChanged,
			
		}
	}

	subcategoryChanged = (new_subcategory) => {
		console.log('subcat change, \n'+new_subcategory);
	}

	locationChanged = (new_location) => {
		console.log('subcat change, \n'+new_location);
	}

	datesChanged = (new_date) => {
		console.log('subcat change, \n'+new_date);
	}

	demographicChanged = (new_demographic) => {
		console.log('subcat change, \n'+new_demographic);
	}

	render() {
		return (
		<div>
			<Subcategory onChange={this.subcategoryChanged} />
			<Location onChange={this.locationChanged} />
			<Dates onChange={this.datesChanged} />
			<Demographic onChange={this.demographicChanged} />
		</div>
		);
	}
}

export default Filters;