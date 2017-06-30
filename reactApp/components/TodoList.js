import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <ul>
        {this.props.todos.map((item) => <Todo key={item.taskText} item={item.taskText} completed={item.completed} />)}
      </ul>
    )
  }
}

export default TodoList;
