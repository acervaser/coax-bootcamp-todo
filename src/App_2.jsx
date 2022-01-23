
import './App.css';
import TodoList from "./components/Todo List";
import Button from "./components/Button";
import { render } from '@testing-library/react';

const tasks = [
  {
    value: "Call mom",
    id: "567890",
    status: "empty"
  },
  {
    value: "Create new designs",
    id: "790415",
    status: "empty"
  },
  {
    value: "Weekly design review",
    id: "679021",
    status: "empty"
  }
];

class App_2 extends React.Component {
  state = {
    tasks
  };

  addTask = (task) => {
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
  };
  deleteTask = (id) => {
    this, setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  };
  checboxHandler = (id) => {
    this.setState.task.map(task => {
      if (task.id === id) {
        switch (task.status) {
          case "empty":
            task.status === "done";
            break;
          case "done":
            task.status === "skipped";
            break;
          case "skipped":
            task.status === "empty";
            break;
          default:
            task.status === "empty";
        }
      }
    }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={todos} removeListItem={removeListItem} />
        <Button onClick={clearListHandler}>Clear all</Button>
      </div>
    );
  }
};
//  const [todos, setTodos] = useState(initTodos)


//    const removeListItem = (id) => {
//     setTodos(
//       todos.filter((todo) =>{
// return todo.id !== id;
//     }))
//    };
//    const clearListHandler = () =>{
//      setTodos([])
//    }






export default App_2;
