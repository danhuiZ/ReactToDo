import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todoItem = (this.props.completed) ? <strike>{this.props.item}</strike> : this.props.item
    return(
      <li className="item">
        <input type="checkbox"></input>
        {todoItem}
      </li>
    )
  }
}

export default Todo;
