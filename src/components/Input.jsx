import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		

		return (
			<input type="text" value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} />
		);
	}
}

export default Input;