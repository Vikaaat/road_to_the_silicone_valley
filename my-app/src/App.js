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


const App = () => <div className="App">
<Header></Header>
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
                
                <Footer children="Продолжая пользование сайтом, вы соглашаетесь на обработку файлов Cookies и других пользовательских данных, в соответствии с политикой конфиденциальности"></Footer>
    </div>
  


export default App;