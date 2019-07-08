import React from 'react'
import {Route, Link} from 'react-router-dom'
import '../css/Breadcrumb.css'
import {Svg} from './Svg'
import {chevron} from '../data/'

// [5]
export const Breadcrumb = props =>(
<ul className="breadcrumbs">
	<Route path='/:path' component={() =><li><Link to={'/'}>Home</Link></li>} />
	<Route path='/:path' component={BreadcrumbsItem} />
	<Route path='/:path/:path' component={BreadcrumbsItem} />
</ul>
)

const BreadcrumbsItem = ({  match,...rest }) =>(
<li className={match.isExact ? 'breadcrumb-active' : undefined}>
	{Svg({points:chevron,width:20,height:15})}
	<Link to={match.url || ''}>
		{match.params.path}
	</Link>
</li>
)

