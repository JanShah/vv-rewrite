import React from 'react'
import {categories, allProducts,randomImage} from '../data'
import {Link} from 'react-router-dom'
import {Gallery} from './Gallery'

export const featured = ()=>{
	const list = allProducts()
	const imageList = []
	for(let category of categories) {
		for(let item of list[category]) {
			item = item.split('-').join(' ')
			const image = randomImage({cat:category,name:item})
			const detail = {
				image:image,
				name:item,
				category:category
			}
			imageList.push(detail)
		}
	}
	return (qty)=>{
		const list = []
		for(let num =0;num<qty;num++) {
			const randomNumber = Math.floor(Math.random()*imageList.length)
			const selected = imageList.splice(randomNumber,1)[0]
			if(selected) list.push(selected)
		}
		return list.map((image,index)=>{
			return (			
			<Link  key={index} to={image.category}>
				<Gallery images={[image.image]} caption={image.name}/>
			</Link>
			)
		})
	}	
}