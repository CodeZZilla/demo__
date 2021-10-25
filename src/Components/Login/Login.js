import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import Backendless from 'backendless';


export default function Login({ setUser }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(email + " " + password)
        Backendless.UserService.login(email, password, false)
            .then(loggedInUser => {
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired
}