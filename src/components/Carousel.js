import React, {Component} from 'react'
import carousel from '../functions/carousel'

export default class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state={
			image:this.props.image
		}
	}

	changeImage(event) {
		this.setState({
			image:event.target.src
		})
	}
	
	render() {
		const prevNext = carousel({list:this.props.imageList,image:this.state.image})
		return <div className="Larger">
			<div className="inner">
				<img 
					className="previous" 
					onClick={this.changeImage.bind(this)} 
				
					src={'/'+prevNext.previous}
					alt=""/>
				<img 
					className="current" 
					onClick={this.props.enlarge} 
					src={this.state.image}
					alt=""
					/>
				<img 
					className="next" 
					onClick={this.changeImage.bind(this)} 
				
					src={'/'+prevNext.next}
					alt=""/>
			</div>
		</div>
	}
}