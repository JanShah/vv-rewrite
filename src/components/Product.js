import React from 'react'
import {catalogProducts,category} from '../data/'
import '../css/Product.css'
import Helmet from 'react-helmet'
import {Gallery} from '../functions/Gallery'
import {Link} from 'react-router-dom'

export const Products = props=>{
	const productList = catalogProducts(props.name)
	const catDescription = category(props.name)
	
	return <section className="Product">
		<Helmet>
			<title>{props.name} | VVV</title>
		</Helmet>	
		<h2>{props.name}</h2>
		<p>
			<img src={'/'+catDescription.image} alt={props.name} />
			{catDescription.description}
		</p>
		<section>
			{productList.map((product,index)=>
			<Link key={index} to={'/'+props.name+'/'+product.name.split(' ').join('-')}>
				<Gallery images={[product.images[0]]} caption={product.name}/>
			</Link>
			)}
		</section>
	</section>
}

 
