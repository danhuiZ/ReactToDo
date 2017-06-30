import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ""
    }
  }
  handleTyping(event) {
    this.setState({
      typedText: event.target.value
    })
  }
  handleSubmit(){
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ""
    })
  }

  render() {
    return(
      <div>
        <input type="text" placeholder="task" onChange={(event) => this.handleTyping(event)} value={this.state.typedText}></input>
        <button onClick={() => this.handleSubmit()} type="submit">Add todo</button>
      </div>
    )
  }
}

export default InputLine;
