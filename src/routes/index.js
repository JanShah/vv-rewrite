import { Route, Switch } from 'react-router-dom'
import React from 'react';
import {Products} from '../components/Product'
import {Pages} from '../components/Pages'
import {Item} from '../components/Item'
import {Home} from '../components/Home'
import {categories,navigation, allProducts} from '../data/'
// [1] React Router
// [2] render: func
const RoutedProduct = ({component: Component, name,...rest}) =>(
  <Route {...rest} render={props=><Component name={name} rest={rest}/>}/>
)

export const Routes =()=>{
	const pro = allProducts()
	return <main>
		<RoutedProduct 
			exact path={'/'} 
			name={'Home'} 
			item={'Home'} 
			component={Home} />
	<Switch>
		{Object.keys(pro).map((cat,index)=>{
			return pro[cat].map((item,id)=>{
				return <RoutedProduct 
					key={index} 
					path={'/'+cat+'/'+item}
					component={Item}
					category={cat}
					name={item}
					/>
				})
			}
		)}
	</Switch>
  {categories.map((category,index)=>
		<RoutedProduct 
			key={index} 
			exact path={'/'+category} 
			name={category} 
			item={category} 
			component={Products} />
  )}
  {navigation.map((page,index)=>
		<RoutedProduct 
			key={index} 
			exact path={'/'+page} 
			name={page} 
			component={Pages} 
			item={page}/>
  )} 
</main>
}