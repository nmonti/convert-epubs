import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.getTest();
  }

  getTest = async () => {
    await fetch('/mobi');
  }
  render() {
    return (
      <div className="App">
        hi
      </div>
    );
  }
}

export default App;
