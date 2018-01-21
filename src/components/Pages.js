import React from 'react'
import Helmet from 'react-helmet'
import '../css/Pages.css'
import Categories from './Categories'
import {Terms} from './Terms'
const navToComponent=(nav)=>{
	const comps = {
		contact:Contact,
		categories:Categories,
		about:About,
		terms:Terms,
		blog:Blog
	}
	return comps[nav]
}

export const Pages   = props=>{
	const Page = navToComponent(props.name)
return <Page />

}

const Contact =()=>{
	return <section>
		<Helmet>
			<title>Contact Us | VVV</title>
		</Helmet>
		Contact Us
	</section>
}

const About =()=>{
	return <section>
		<Helmet>
			<title>About Us | VVV</title>
		</Helmet>
		
		A bit more About
	</section>
}



const Blog =()=>{
	return <section>
		<Helmet>
			<title>Blog | VVV</title>
		</Helmet>
		We Blog therefore we are
	</section>
}


