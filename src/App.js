
import React from 'react';

import AddTaskForm from './components/addTaskForm';
import Task from './components/Task';

class App extends React.Component {
	state = {
		tasks: []
	}

	addTask = (task) => {
		this.setState({
			tasks: [...this.state.tasks, task]
		});
	}
	deleteTask = (id) => {
		this.setState({
			tasks: this.state.tasks.filter(task => task.id !== id)
		});
	}
	checkboxHandler = (id) => {
		this.setState({
			tasks: this.state.tasks.map(task => {
				if (task.id === id) {
					task.status === 'done' ? task.status = 'skipped' :
						task.status === 'skipped' ? task.status = 'empty' : task.status = 'done';
				}
				return task;
			})
		});
	}

	componentDidMount() {
		const tasks = JSON.parse(localStorage.getItem('tasks'));
		if (tasks) {
			this.setState({ tasks });
		}
	}
	componentDidUpdate() {
		console.log('update');
		localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
	}

	render() {
		return (
			<div className={cl.wrapper}>
				<div className={cl.body}>
					<div className={cl.list}>
						{/* <ListHeader /> */}
						{this.state.tasks.map(task => <Task task={task} deleteTask={this.deleteTask} checkboxHandler={this.checkboxHandler} key={task.id} />)}
					</div>
				</div>
				<AddTaskForm addTask={this.addTask} />
			</div>
		);
	}
}

export default App;
