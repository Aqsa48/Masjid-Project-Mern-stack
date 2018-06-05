import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Timing from "./Timing";

import App from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route exact path='/login' name='Login' component={Login}/>
        <Route exact path='/' name="Login" component={Login}/>
        <Route exact path='/signup' name='signup' component={Signup}/>
        <Route exact path='/timing' name='time' component={Timing}/>

    </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
