import React, { Component } from 'react';
import Stateful from './components/Stateful'
import Stateless from './components/Stateless'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Stateful />
        <Stateless />
      </div>
    );
  }
}

export default App;
