import React from 'react'
import '../css/Home.css'
import {featured} from '../functions/featured'
import {storeDescription as description} from '../data/'
import {Reviews} from './Reviews'

export const Home =()=>(
<section className="Home">		
	<span>{description}</span>
	<section>
		{featured()(4)}
		{featured()(4)}
	</section>
	<Reviews />
</section>
)