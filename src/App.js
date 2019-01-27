import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title : "Belajar Redux"
    }
  }

  render() {
    return (
      <div className="App">
        {/* Contoh Bila props manual dari local state */}
        <Header title = { this.state.title } />
      </div>
    );
  }
}

export default App;
