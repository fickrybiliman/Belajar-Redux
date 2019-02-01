import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

// Cara react component mendapatkan state dari redux
import { connect } from 'react-redux';

class App extends Component {
  // Initialize local state
  // constructor() {
  //   super()
  //   this.state = {
  //     title : "Belajar Redux"
  //   }
  // }

  render() {
    return (
      <div className="App">

        {/* Contoh Bila props manual dari local state */}
        {/* <Header title = { this.state.title } /> */}
        
        {/* Ini Ambil state nya dari redux */}
        {/* <h2>
          { this.props.title }
        </h2> */}

        {/* Ini state nya ada di Header  */}
        <Header />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title : state.title
  }
}

export default connect(mapStateToProps)(App);
