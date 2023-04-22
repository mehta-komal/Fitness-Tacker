import React, {createContext, useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Info from './frontend/information/Information';
import Data from './frontend/data/Data';
import Preview from './frontend/preview/Preview';
import Signup from './frontend/signup/Signup';
import Signin from './frontend/signin/Signin';
import Navbar from './frontend/navbar/Navbar';


import  {initialState, reducer} from '../src/reducer/Reducer';

import './App.css';
export const UserContext=createContext();
 function App() {
  
  const [state, dispatch]=useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
      
      <Navbar />
      
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route path="/info" component={Info} />
        <Route path="/data" component={Data} />
        <Route path="/preview" component={Preview} />
        <Route path="/signin" component={Signin} />
      
        
        <Redirect to="/register" />
      </Switch>
    </UserContext.Provider>
    </>
  );
}
export default App


