import React from 'react'
import {reviews} from '../data/'
import '../css/Reviews.css'
export const Reviews=()=>
<section className="Reviews">
	<h3>Some of our many reviews</h3>
	{reviews.map((review,index)=>
	<p key={index}>
		<q>{review.quote}</q>
		<cite>{review.cite}</cite>
	</p>
	)}
</section>