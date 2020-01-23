import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* ===== VIEWS ===== */
import Home from './Components/Views/Home';
import Login from './Components/Views/Login';
import Dashboard from './Components/Views/Dashboard';
/* ================= */


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
