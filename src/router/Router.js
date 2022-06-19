import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from '../pages/MainPage.js';
import Ideas from '../pages/Ideas.js';
import Problems from '../pages/Problems.js';
import SignUp from '../pages/SignUp.js';
import SignIn from '../pages/SignIn.js';
import Profile from '../pages/Profile.js';
import ReadMore from '../pages/ReadMore.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/readmore'>
        <ReadMore/>
      </Route>
      <Route path='/profile'>
        <Profile/>
      </Route>
      <Route path='/signin'>
        <SignIn/>
      </Route>
      <Route path='/signup'>
        <SignUp/>
      </Route>
      <Route path='/problems'>
        <Problems/>
      </Route>
      <Route path='/ideas'>
        <Ideas/>
      </Route>
      <Route path=''>
        <MainPage/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
