import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Gallery} from '../functions/Gallery'
import {categories,category} from '../data/'
import {Link} from 'react-router-dom'
import '../css/Category.css'

export default class Categories extends Component{
	render() {
		return <section className="Category">
			<Helmet>
				<title>All Categories | VVV</title>
			</Helmet>
			{categories.map((cat,index)=>{
				const item = category(cat)
				return <div key={index}>
					<Link to={'/'+item.name} >
						<Gallery images={[item.image]} caption={item.name} />
					</Link>
					<p>{item.short_description}</p>
				</div>
			})}
		</section>
	}
}
