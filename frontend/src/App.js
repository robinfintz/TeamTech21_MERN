import Robin from './Robin.jpg';
import './App.css';

import { 
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter as Router
} from 'react-router-dom';
import {useState} from 'react';

import './App.css';
import Navigation from "./components/Navigation"

//{/* comment */}

//import NotFound from './views/NotFound';
import Home from './views/Home';
import Login from './views/Login';
import Location from './views/Location';
import Setup from './views/Setup';
import Settings from './views/Settings';
import Employees from './views/Employees';

function App() {
  let [username, setUsername] = useState("")

  return (
    <Router>
      <div id='page-container'>
        <Navigation/>
        {/* <img src={Robin} className="App-logo" alt="logo" /> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home"/>
            </Route>
            <Route exact path="/Home" render={(props) => <Home {...props}/>}/>
            <Route exact path="/Login" render={(props) => <Login {...props}/>}/>
            <Route exact path="/Location" render={(props) => <Location {...props}/>}/>
            <Route exact path="/Setup" render={(props) => <Setup {...props}/>}/>
            <Route exact path="/Settings" render={(props) => <Settings {...props}/>}/>
            <Route exact path="/Employees" render={(props) => <Employees {...props}/>}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;