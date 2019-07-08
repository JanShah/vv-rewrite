import React,  { Component } from 'react';
import {RightSection,LeftSection} from './HeaderSections'
import '../css/Header.css'

export default class Header extends Component  {
  render() {
    return <header>
			<LeftSection />
			<RightSection />
  </header>
  }
}