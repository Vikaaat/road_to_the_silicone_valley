import './App.css';
import React from 'react';
import render from 'react-dom'
import Head from './components/Head.js';
import Nav from './components/Nav.js';
import Foot from './components/Foot.js';
import Control from './components/Control.js';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Nav />
        <main>
          <Control />
        </main>
        <Foot />
      </div>
    );
  }
}

export default App;