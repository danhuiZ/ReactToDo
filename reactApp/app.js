// alert('app.js ran!');

import React from 'react';
import ReactDOM from 'react-dom';

const dummyData =["Eat", "Sleep", "Beat Doudou", "Karaoke", "Live life"]

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <ul>
        {this.props.todo.map((item) => <Todo key={item} item={item} />)}
      </ul>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <li><input type="checkbox"></input>{this.props.item}</li>
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
  }
  render() {
    return(
      <div>
        <InputLine />
        <TodoList todo={this.props.todo}/>
      </div>
    )
  }
}



ReactDOM.render(<TodoApp todo={dummyData} />, document.getElementById('root'));
