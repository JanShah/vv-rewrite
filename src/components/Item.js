import React from 'react'
import {individualItem} from '../data/'
import ProductInfo from './ProductInfo'
import Helmet from 'react-helmet'
import '../css/Item.css'
export const Item =(props)=>{
	const itemName = props.name.split('-').join(' ')
	const item = individualItem({name:itemName,cat:props.rest.category})
	return <section className='Item'>
		<Helmet>
			<title>{itemName} | VVV</title>
		</Helmet>
		<h2>{itemName}</h2>
		<ProductInfo product={item} />
	</section>
}
