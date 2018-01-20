import React from 'react'

export const ProductDescription=(props)=>(
<section>
	<h4>Description</h4>
	<p>{props.description}</p>
</section>
)

export const AdditionalInfo=(props)=>(
<section>
	<h4>Additional Information</h4>
	<ul>
		{props.additional.map((info,index)=>{
			return <li key={index}>{info}</li>
		})}
	</ul>
</section>
)
		