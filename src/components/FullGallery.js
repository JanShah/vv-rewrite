import React, {Component} from 'react'
import {Gallery} from '../functions/Gallery'
import '../css/Larger.css'
import Carousel from './Carousel'

export default class FullGallery extends Component {
	constructor(props) {
		super(props)
		this.state={
			mainImage:window.location.origin+'/'+props.images[0],
			name:props.name
		}
		this.handleClick = this.handleClick.bind(this)
		this.enlarge = this.enlarge.bind(this)
	}

	componentDidUpdate() {
		if(this.props.name!==this.state.name) {
			this.changeImage(this.props.images[0])
		}
	}

	handleClick(event) {
		this.changeImage(event.target.src)
	}

	changeImage(image) {
		this.setState({
			mainImage:image,
			name:this.props.name
		})
	}

	enlarge(event) {
		this.setState({
			large:!this.state.large
		})
	}

	large() {
		return this.state.large
		?<Carousel 
			enlarge={this.enlarge.bind(this)} 
			image={this.state.mainImage}
			imageList={this.props.images}
			/> 
		:''
	}
	
	render() {
		return 	<section>
		{this.large()}
		<h4>Gallery</h4>
		<Gallery 
			onClick={this.enlarge} 
			images={[this.state.mainImage]} 
			caption={this.props.name+'Click to enlarge'} />
		<Gallery 
			onClick={this.handleClick} 
			images={this.props.images} 
			caption={this.props.name+'Thumbs'} />
	</section>
	}
}


