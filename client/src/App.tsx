import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {SignIn} from './pages/SignIn/SignIn';
import Home from './pages/Home';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Redirect to="/home"/>
          </Route>
          <Route path='/signin' component={SignIn}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
  );
}

export default App;
