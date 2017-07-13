import React, { Component } from 'react';
import Stateful from './components/Stateful'
import Stateless from './components/Stateless'
import Header from './components/Header'
import SetState from './components/SetState'
import Mother from './components/Mother'
import ButtonMother from './components/ButtonMother'
import MotherRefactor from './components/MotherRefactor'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Stateful />
        <Stateless />
        <Header />
        <SetState />
        <Mother />
        <ButtonMother />
        <MotherRefactor />
      </div>
    );
  }
}

export default App;
