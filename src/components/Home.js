import React from 'react'
import '../css/Home.css'
import {featured} from './featured'

const description = <span>VVV is the premiere destination for all those seeking vintage and early period clothing and costumes of the highest quality. We always aim to provide garments that are accurate reproductions of bygone days and employ the best artisans and historians to do just that. Our range includes Tunics, Breeches, Cloaks and much more! Feel free to browse, ask any questions or visit and comment on our blog</span>


export const Home =()=>{
	const images = featured()(4)
	return <section className="Home">		
			{description}
			<section>
				{images}
			</section>
	</section>
}
