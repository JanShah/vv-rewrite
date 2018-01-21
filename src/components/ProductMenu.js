import React from 'react';
import {Route,Link} from 'react-router-dom'
import {categories,allProducts} from '../data/'
import '../css/ProductMenu.css'
const SubNav=(props)=>{
	const items = allProducts(props.cat)
	return <nav>
		{items.map((item,index)=>(
		<MenuLink 
			key={index} 
			activeOnlyWhenExact={true} 
			to={'/'+props.cat+'/'+item} 
			label={item.split('-').join(' ')}/>)
		)}
		</nav>
}

export const ProductMenu =()=>(
<div className="ProductMenu">
	<nav> 			
		{categories.map((category,index)=>(
		<span key={index} >
			<MenuLink activeOnlyWhenExact={true} to={'/'+category} label={category}/>
			<SubNav cat={category}/>
		</span>
		)
		)}
	</nav>
</div>
)
// [4] active link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active' : ''} to={to}>{label}</Link>
  )}/>
)