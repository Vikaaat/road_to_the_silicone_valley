import './App.css';
import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { Header, Footer} from '@design-system-rt/rtk-ui-kit';
import Template_web from './Template_web';
import Template_mob from './Template_mob';
import Home from './Home';
import ReactDOM from 'react-dom';
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
        <Router>

          <Switch>
              <Route path="/template_web/" component={Template_web} exact>
              </Route>
              <Route path="/template_mob/" component={Template_mob} exact>
              </Route>
              <Route path="/" component={Home} exact>
              </Route>

          </Switch>
          </Router>
        <main>
          <Control />
        </main>
        <Foot />
      </div>
    );
  }
}


export default App;