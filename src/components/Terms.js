import React from 'react';
import Helmet from 'react-helmet'
import {terms} from '../data/terms'
//[6]
export const Terms=()=> 
<div>
	<Helmet>
		<title>Terms and conditions | VVV</title>
	</Helmet>
	<section id="introduction">
		<h2>{terms.title}</h2>
		<em>{terms.updated}</em>
		{terms.intro.map((term,index)=>
		<p key={index}>{term}</p>
		)}
	</section>
	{terms.content.map((term,index)=>
	<section key={index}>
		<h3>{term.title}</h3>
		{term.detail.map((condition,id)=>
		<p key={id}>{condition}</p>
		)}
	</section>			
	)}
</div>
