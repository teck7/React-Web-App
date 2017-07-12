import React, { Component } from 'react';
import Stateful from './components/Stateful'
import Stateless from './components/Stateless'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Stateful />
        <Stateless />
        <Header />
      </div>
    );
  }
}

export default App;
