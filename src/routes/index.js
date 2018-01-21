import { Route } from 'react-router-dom'
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

const allPaths = ()=>{
	const paths = [{
		path:'/',
		name:'Home',
		component:Home, 
		item:'Home'
	}]
	categories.forEach(category=>{
		paths.push({
			path: '/'+category,
			name:category,
			item:category,
			component:Products
		})
		allProducts()[category].forEach(item=>
		paths.push({
			path:'/'+category+'/'+item,
			component: Item,
			category:category,
			name:item
		}))
	})
	navigation.forEach(page=>
		paths.push({
			path:'/'+page,
			name:page,
			component:Pages, 
			item:page
		})
  )
	return paths
}

export const Routes =()=><main>
	{allPaths().map((route,index)=>
	<RoutedProduct 
		key={index}
		exact path={route.path} 
		name={route.name} 
		item={route.item} 
		component={route.component} 
		category={route.category||''}
		/>
	)}
</main>