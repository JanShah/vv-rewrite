import React from 'react'
export const Gallery=(props)=>(
<figure>
	{props.images.map((image,index)=>{
		const source = image.match(/http/)?image:'/'+image
		return <img key={index} onClick={props.onClick} src={source}  alt="" />
	})}
	<Caption text={props.caption}/>
</figure>
)

const Caption =(props)=>(
<figcaption>
	{props.text}
</figcaption>
)