import React from 'react'
import {catalogProducts,category} from '../data/'
import ProductInfo from './ProductInfo'
import '../css/Product.css'
export const Products = props=>{
	const productList = catalogProducts(props.name)
	const catDescription = category(props.name)
	return <section className="Product"><h2>{props.name}</h2>
	<p>{catDescription.description}</p>
	<img src={'/'+catDescription.image} alt={props.name} />
	 {
		productList.map((product,index)=><ProductInfo  key={index} product={product} />)
	}</section>
}

 
