import React from 'react'

const navToComponent=(nav)=>{
	const comps = {
		contact:Contact,
		products:AllCategories,
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

const AllCategories =()=>{
	return <section>
		all Categories
	</section>
}

const Contact =()=>{
	return <section>
		Contact Us
	</section>
}

const About =()=>{
	return <section>
		A bit more About
	</section>
}

const Terms =()=>{
	return <section>
		Some terms muthaFucka
	</section>
}

const Blog =()=>{
	return <section>
		We Blog therefore we are
	</section>
}


