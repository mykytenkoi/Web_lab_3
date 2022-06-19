import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

const SignIn = () => {
    const [isdisabled, setDisabled] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleRedirect = (url) => () => {
        if(url) {
            history.push(url);
        }
    } 
    
    return(
        <div className="background">
            <div className="signup-section">
                <div className="main-logo"></div>
                <h1 className="signup-title">Sign in to Urban blog</h1>
                <input className="input-signup" type="email" id="inputEmail" placeholder="Email address" required autofocus></input>
                <input className="input-signup" type="password" id="inputPassword" placeholder="Password" required></input>

                <input className="input-sign sign-button" type="submit" value="Sign Up" onClick={handleRedirect('/profile')}></input>
            </div>
            <div className="redirect-section">
                <p className="signin-text">New to Urban blog? <button className="link-button" onClick={handleRedirect('/signup')}>Create an account</button></p>
            </div>
        </div>
    )
};

export default SignIn;