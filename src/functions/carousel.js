export default function carousel(props) {
	let previous,next
	const list = props.list
	list.forEach((image,index)=>{
		if(props.image.match(image)) {
			if(!index) {
				previous = list[list.length-1]
				next=list[index+1]					
			} else {
				previous = list[index-1]
				next = list[index+1]?list[index+1]:list[0]
			}
		}
	})
	return {
		previous: previous,
		next:next
	}
}