
import './App.css';
import TodoList from "./components/Todo List";
import Button from "./components/Button";
import { render } from "@testing-library/react";

const task = [
  {
    value:"Call mom",
    id:"567890"
  }, 
  {
    value:"Create new designs",
    id:"790415"
  }, 
  {
    value:"Weekly design review",
    id:"679021"
  } 
 ];

 class App_2 extends React.Component {
    state = {
      task
    };

    addTask = (task) => {
      this.setState({
        tasks: [task, ...this.state.taks]
      });
    };
    deleteTask = (id) => {
      this,setState({
        tasks: this.state.tasks.filter(task => task.id !== id )
      });
    };

    
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
  
render() { 
   return (
    <div className="App">
     <h1>Todo List</h1>
     <TodoList todos={todos} removeListItem={removeListItem} />
    <Button onClick={clearListHandler}>Clear all</Button>
    </div>
  );
 }


 
 

export default App_2;
