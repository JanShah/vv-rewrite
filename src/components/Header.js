import React,  { Component } from 'react';
import {RightSection} from './RightSection'
import {Link} from 'react-router-dom'
import logo from '../logo.svg';
import '../css/Header.css'

export default class Header extends Component  {
  render() {
    return <header>
			<span>
				<Link to="/"> <img src={logo} className="App-logo" alt="valiants vintage vestures" /></Link>
				<h1 className="App-title">Welcome to React</h1>
			</span>
			<RightSection />
  </header>
  }
}