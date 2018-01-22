import React from 'react'
import {categories, allProducts,randomImage} from '../data'
import {Link} from 'react-router-dom'
import {Gallery} from '../functions/Gallery'

export const featured = ()=>{
	const list = allProducts()
	const imageList = []
	for(let category of categories) {
		for(let item of list[category]) {
			imageList.push({
				image:randomImage({
					cat:category,
					name:item.split('-').join(' ')
				}),
				name:item,
				category:category
			})
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