import React,  { Component } from 'react';
import {navigation} from '../data/'
import {Link} from 'react-router-dom'

export default class NavMenu extends Component {
	render() {
		const navItems = navigation.map((page,index)=>
			<Link key={index} to={'/'+page}>{page}</Link>
		)
		return <nav> 
			{navItems}
		</nav>
	}
}