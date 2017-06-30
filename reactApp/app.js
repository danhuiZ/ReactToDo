// alert('app.js ran!');

import React from 'react';
import ReactDOM from 'react-dom';

const dummyData =[
  { taskText: "Catch 'em all",
  completed: true },
  { taskText: "Eat",
  completed: false },
  { taskText: "Sleep",
  completed: false },
  { taskText: "Beat Doudou",
  completed: false },
  { taskText: "Karaoke",
  completed: false },
  { taskText: "Live life",
  completed: false }]

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

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <input type="text" placeholder="task"></input>
        <button type="submit">Add todo</button>
      </div>
    )
  }
}


// function TodoApp()
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }
  render() {
    return(
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}



ReactDOM.render(<TodoApp />, document.getElementById('root'));
