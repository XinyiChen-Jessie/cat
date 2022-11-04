import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='data:image/jpeg;base64,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' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to CatLover Conditions of Use & Sale.
                </p>

                <button onClick={register} className='login__registerButton'>Create your CatLover Account</button>
            </div>
        </div>
    )
}

export default Login
