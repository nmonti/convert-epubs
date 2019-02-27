import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { showDownload: false };

  getMobi = async () => {
    await fetch('/convert');
    this.setState({showDownload: true});
  }

  getDownloadLink = () => {
    return this.state.showDownload 
           ? 
           <a href="/output.mobi" download>Click to download</a> 
           :
           <p>convert</p>;
  }

  render() {
    return (
      <div className="App" onClick={this.getMobi}>

        {this.getDownloadLink()}
      </div>
    );
  }
}

export default App;
