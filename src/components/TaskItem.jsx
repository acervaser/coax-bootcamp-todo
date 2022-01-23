import EmptyboxIcon from "../assets/image/Empty.png";
import CompletedboxIcon from "../assets/image/Completed.png";
import SkippedboxIcon from "../assets/image/Skipped.png";
import TrashIcon from '../assets/image/trash-2.png';
import React from "react";
import Button from "./Button";

class Task extends React.Component {
    constructor(props) {
        super(props);
    }
}
 render() {
     return <div>
         <button onClick={() =>this.props.checkboxHandler(this.props.task.id)}>
          <img src={CheckboxIcon} alt="CheckboxIcon"/>
{

{

}
}

         </button>
     </div>
 }

export default TodoListItem;