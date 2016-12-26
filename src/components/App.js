import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>CRUD</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;