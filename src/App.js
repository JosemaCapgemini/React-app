import React, { Component } from 'react';
import Todo from './Todo';


class App extends Component {
  state = {
    todo: [
      { things: "Tutorials", id: 1 },
      { things: "More tutorials", id: 2 },
      { things: "More more more tutorials", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>You are welcome.</p>
        <Todo todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
