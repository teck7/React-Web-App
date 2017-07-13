import React from 'react';

class MotherRefactor extends React.Component {
  constructor() {
    super();
    this.state = {
      initialStateText: "This is initial State",
      initialStateNumber: 0
    }
  }

  // Update function
  update() {
      this.setState({
        initialStateText: this.refs.textOnly.value,
        initialStateNumber: this.refs.numberOnly.value
      })
  }

  render() {
    return (
      <div>
        <h1>SetState Component</h1>
        <h1>{this.state.initialStateText} - {this.state.initialStateNumber}</h1>
        <input ref="textOnly"
               type="text"
               onChange={this.update.bind(this)}
        />
      <hr />
        <input
               ref="numberOnly"
               type="number"
               onChange={this.update.bind(this)}
        />
      </div>
    )
  }
}

export default MotherRefactor
