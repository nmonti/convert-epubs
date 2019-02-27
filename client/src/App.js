import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { test: '' }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getTest();
  }

  getTest = () => {
    // Get the passwords and store them in state
    fetch('/mobi')
      .then(res => res.json())
      .then(test => this.setState({ test }));
  }
  render() {
    return (
      <div className="App">
        {this.state.test.test}
      </div>
    );
  }
}

export default App;
