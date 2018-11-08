import React, { Component } from 'react';
import Todo from './Todo';
import Topbar from './Topbar';


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
        <div className="Topbar">
          <Topbar />
        </div>
        <div className="Todo">
          <h1>My first React app!</h1>
          <p>This is your list to do:</p>
          <Todo todo={this.state.todo} />
        </div>

      </div>
    );
  }
}

export default App;
