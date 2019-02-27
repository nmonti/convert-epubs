import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { showDownload: false };

  getMobi = async () => {
    await fetch('/convert');
    this.setState({showDownload: true});
  }

  render() {
    const downloadLink = this.state.showDownload 
                         ? 
                         <a href="/output.mobi" download>Click to download</a> 
                         :
                         <p>convert</p>;
    return (
      <div className="App" onClick={this.getMobi}>

        {downloadLink}
      </div>
    );
  }
}

export default App;
