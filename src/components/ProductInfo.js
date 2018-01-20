import React from 'react'
import FullGallery from './FullGallery'
import {ProductDescription,AdditionalInfo} from './ProductDescription'
export default function(props){
	const product = props.product
	return (<section>
		<h3>{product.name}</h3>
		<FullGallery name={product.name} images={product.images} />
	<section>
		<ProductDescription description={product.description} />
		<AdditionalInfo additional={product.additional} />
	</section>
	</section>)
}