import './App.css';
import React from 'react';
import Head from './components/Head.js';
import Nav from './components/Nav.js';
import Tools from './components/Tools.js';
import Foot from './components/Foot.js';
import Main from './components/Main.js';
import Inspector from './components/Inspector.js';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Nav />
        <main>
          <Tools />
          <Main />
          <Inspector />
        </main>
        <Foot />
      </div>
    );
  }
}

export default App;