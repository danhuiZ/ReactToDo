import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import InputLine from './InputLine';

const dummyData =[
  { taskText: "Catch 'em all",
  completed: false },
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

  addTodo(task) {
    dummyData.push({
      taskText: task,
      completed: false
    })
    this.setState({
      todos: dummyData
    })
  }

  removeTodo(index) {
    dummyData.splice(index, 1)
    this.setState({
      todos: dummyData
    })
  }
  render() {
    return(
      <div>
        <InputLine submit={(t) => this.addTodo(t)}/>
        <TodoList todos={this.state.todos} todoXClick={(i) => this.removeTodo(i)}/>
      </div>
    )
  }
}

export default TodoApp;
