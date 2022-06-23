import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import {Route , Switch , Link, BrowserRouter }from 'react-router-dom';
import routes from './routes';
class App extends Component {
 
  render() {
    return (
       <BrowserRouter>
       <Switch>
         {routes.map((route,index)=>(
         <Route key={index} path={route.path} component={route.main} exact={route.exact} />
         )
         )}
       </Switch>
    </BrowserRouter>
    
    );
  }
}

export default App;

