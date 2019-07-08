import React from 'react'
import {svgStyle} from '../data/'

export const Svg = (props)=>(
<svg width={props.width} height={props.height}>
	<polyline style={svgStyle} points={props.points}/>
</svg>
)