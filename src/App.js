import React, { Component } from 'react';
import './sass/main.css';
import TitleBar from './components/TitleBar';


class App extends Component {
  render() {
    return (
      <div className="main-container" >
        <TitleBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
