import React from 'react'
import {categories, allProducts, firstImage} from '../data'
import '../css/Home.css'
import {Gallery} from './Gallery'
import {Link} from 'react-router-dom'

const description = <span>VVV is the premiere destination for all those seeking vintage and early period clothing and costumes of the highest quality. We always aim to provide garments that are accurate reproductions of bygone days and employ the best artisans and historians to do just that. Our range includes Tunics, Breeches, Cloaks and much more! Feel free to browse, ask any questions or visit and comment on our blog</span>

const featured = ()=>{
	const list = allProducts()
	const imageList = []
	console.log()
	for(let category of categories) {
		for(let item of list[category]) {
			item = item.split('-').join(' ')
			const image = firstImage({cat:category,name:item})
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

export const Home =()=>{
	const images = featured()(4)
	console.log(images)
	return <section className="Home">		
			{description}
			<section>
				{images}
			</section>
	</section>
}
