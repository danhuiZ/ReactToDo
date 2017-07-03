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
        {this.props.todos.map((item, index) => <Todo key={item.taskText} item={item.taskText} completed={item.completed} xClick={(() => this.props.todoXClick(index))} />)}
      </ul>
    )
  }
}

export default TodoList;
