import React from 'react';
import SearchBox from './SearchBox'
import NavMenu from './NavMenu'
import {Link} from 'react-router-dom'
import logo from '../logo.svg';

export const RightSection =()=>(
<span>
	<NavMenu />
	<SearchBox />
	<img src="/img/icons/cart.svg" alt="shopping basket"/>
</span>
)


export const LeftSection =()=>	<span>
<Link to="/"> <img src={logo} className="App-logo" alt="valiants vintage vestures" /></Link>
<h1 className="App-title">Welcome to React</h1>
</span>