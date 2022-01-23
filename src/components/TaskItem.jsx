import { render } from "@testing-library/react";
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
if (this.props.task.status ==="done")
{

}
}

         </button>
     </div>
 }

export default TodoListItem;