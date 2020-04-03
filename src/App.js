import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count,
    }
    console.log(props)
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }
  decrement = () => {
    this.setState({count: this.state.count + 1})
  }
  reset = () => {
    this.setState({count: this.props.count})
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {this.increment()}}
        >
          +
        </button>
        <button
          onClick={() => {this.decrement()}}
        >
          -
        </button>
        <button
          onClick={() => {this.reset()}}
        >
          reset
        </button>
      </div>
    )
    }
}

App.defaultProps = {
  count: 0,
}

export default App;
