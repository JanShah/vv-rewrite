import React, { Component } from 'react'
import '../css/Searchbox.css'

export default class SearchBox extends Component  {
	render() {
		return <fieldset className="SearchBox">
			<legend>Product Search</legend>
			<label htmlFor="search">Search</label>
			<input type="text" placeholder="search" name="search"/>
		</fieldset>
	}	
}