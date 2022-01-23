import EmptyboxIcon from "../assets/image/Empty.png";
import CompletedboxIcon from "../assets/image/Completed.png";
import SkippedboxIcon from "../assets/image/Skipped.png";
import TrashIcon from '../assets/image/trash-2.png';
import React from "react";


class Task extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div >
				<button  onClick={() => this.props.checkboxHandler(this.props.task.id)}>
					<img src={EmptyboxIcon} alt="" />
					{this.props.task.status === 'done' ? <img src={CompletedboxIcon} alt="" /> :
						this.props.task.status === 'skipped' ? <img src={SkippedboxIcon} alt="" /> : null}
				</button>
				<div >
					{this.props.task.text}
				</div>
				<button onClick={() => this.props.deleteTask(this.props.task.id)}>
					<img src={TrashIcon} alt="" />
				</button>
			</div>
		);
	}
}

export default Task;