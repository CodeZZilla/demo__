import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Preferences from './Components/Preferences/Preferences';

import Backendless from 'backendless';

const APP_ID = '05F3AFA7-91ED-5265-FF18-91DB2AC36500';
const API_KEY = 'A911EFF1-BDAA-49FB-9761-6BC26B3D5189';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

function setUser(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
    const userString = sessionStorage.getItem('user');
    return JSON.parse(userString)
}

function App() {
    //const user = getUser();
    const [user, setUser] = useState();
    if(!user) {
        return <Login setUser={setUser} />

    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <li>
                    <Link to="/login">
                        <button onClick={event => sessionStorage.removeItem('user')}>Logout</button>
                    </Link>
                </li>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/preferences">
                        <Preferences/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
