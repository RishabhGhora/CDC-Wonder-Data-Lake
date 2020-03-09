/*
Searchbar component used on both main Home page and Graph page. Regardless of where this component lives, it will redirect the user to our
Graph page via pressing the search button. 
The Graph page will take care of whether or not it should query for something new or use the cached version of what it has (given that the
data we have is small enough to be cached) ** future plan
Searchbar styles will be applied per page, the Home page or Graph page will apply its one style to the SearchBar component within their
respective JavaScript files.
*/
import React, { Component } from 'react'

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			topics: [],
			base: "graph",
		}
	}

	search = () => {
		var search_res = document.getElementById('search').value;
		if (search_res !== "") {
			search_res = search_res.replace(/\s+/g, '%');
			window.location.href = encodeURI(this.state.base + '/' + search_res);
		}
	}

	render() {
		const { topics } = this.state;

		var topics_list = "";
		for (const opt in topics)
			topics_list += '<option value='+opt+' />';

		return (
			<div className="SearchBar">
				<input list="topics" type="text" id="search" autoComplete="off" />
				<datalist id="topics">
					{topics_list}
				</datalist>
				<button type="button" onClick={this.search}>
					Search
				</button>
			</div>
		)
	}
}

export default SearchBar