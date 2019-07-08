import React, {Component} from 'react'
import NavMenu from './NavMenu'
import '../css/Footer.css'
export default class extends Component {
	render() {
		return <footer className="Footer">
			<NavMenu />
		</footer>
	}
}