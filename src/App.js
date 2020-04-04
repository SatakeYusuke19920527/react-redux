import propsTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count,
      name: 'press Button!!'
    }
    console.log(props)
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      name: 'increment',
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count + 1,
      name: 'decrement'
    })
  }
  reset = () => {
    this.setState({
      count: this.props.count,
      name: this.props.name
    })
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <h2>{this.state.count}</h2>
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
  name: 'defaultName',
  box: {
    count: 0,
    name: 'defaultName',
  }
}

App.propsTypes = {
  count: propsTypes.number,
  name: propsTypes.string
}

export default App;
