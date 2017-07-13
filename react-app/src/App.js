import React, { Component } from 'react';
import Stateful from './components/Stateful'
import Stateless from './components/Stateless'
import Header from './components/Header'
import SetState from './components/SetState'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Stateful />
        <Stateless />
        <Header />
        <SetState />
      </div>
    );
  }
}

export default App;
