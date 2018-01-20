import React from 'react'
import {individualItem} from '../data/'
import ProductInfo from './ProductInfo'
export const Item =(props)=>{
	const itemName = props.name.split('-').join(' ')
	const item = individualItem({name:itemName,cat:props.rest.category})
	return <section>
		<h2>This is an individual item {props.rest.category}, {itemName}</h2>
		<ProductInfo product={item} />
	</section>
}
