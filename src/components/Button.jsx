
import React from "react"
const style = {
color: "red",
backgroundColor:"aquamarine"
}
class Button extends React.Component{
    constructor(props) {
        super(props);
    };
    render() {
		

		return (
			<button type={this.props.type}>{this.props.children}</button>
            
		);
	}
}
    
export default Button