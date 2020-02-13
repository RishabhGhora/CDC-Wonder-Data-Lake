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

	render() {
		return (
			<div class="SearchBar">
				<input type="text" id="search" />
				<button type="button">
					<a href="/graph">
						Search
					</a>
				</button>
			</div>
		)
	}
}

export default SearchBar