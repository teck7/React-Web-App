import React from 'react';
// All events type could be found on
// https://facebook.github.io/react/docs/events.html#clipboard-events


class SetState extends React.Component {
  constructor() {
    super();
    this.state = {
      initialStateText: "This is initial State",
      initialStateNumber: 0
    }
  }

  // Update function
  updateStateText(event) {
      this.setState({ initialStateText: event.target.value
      })
  }

  // Update function
  updateStateNumber(event) {
      this.setState({ initialStateNumber: event.target.value
      })
  }

  render() {
    return (
      <div>
        <h1>SetState Component</h1>
        <h1>{this.state.initialStateText} - {this.state.initialStateNumber}</h1>
        <input type="text"
               onChange={this.updateStateText.bind(this)}
        />
        <input type="number"
               onChange={this.updateStateNumber.bind(this)}
        />
      </div>
    )
  }
}

export default SetState
