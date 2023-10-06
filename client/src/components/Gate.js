import React, { useState, useContext } from 'react'
import { LoginContext } from '../App'

function Gate() {
    const [user, setUser] = useContext(LoginContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errorData, setErrorData] = useState([])
    const [signUp, setSignUp] = useState(false)

    function onSignUpSubmit(e) {
        e.preventDefault()
        const userCreds = {
            username,
            password,
            password_confirmation: passwordConfirmation,
        }
        fetch('/users', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(userCreds)
        })
        .then(res => {
            if(res.ok){
                res.json().then(setUser)
            } else {
                res.json().then( (err) => console.log(err.errors) )
            }
        }) 
    }

    function onLoginSubmit() {
        console.log('onLoginSubmit not written')
    }

    
    return (
        <div class="login-wrapper">
            <div class="login">
                <h3>{errorData}</h3>
                {!signUp ? (
                    <form onSubmit={onLoginSubmit}>
                        <input
                            placeholder='Username'
                            class="login-input"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            placeholder='Password'
                            class="login-input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button class="login-button" type="submit" name="Login">Log In</button>
                        <div>Are you new? <a class="login-link" onClick={() => setSignUp(!signUp)}>Sign Up!</a> </div>
                    </form>
                ) : (
                    <form onSubmit={onSignUpSubmit}>
                        <input
                            placeholder='Username'
                            class="login-input"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            placeholder='Password'
                            class="login-input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input
                            placeholder='Confirm Password'
                            name='password_confirmation'
                            class="login-input"
                            type="password"
                            id="password_confirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />

                        <button class="login-button" type="submit" name="Sign Up">Sign Up</button>
                        <div>Have an account? <a class="login-link" onClick={() => setSignUp(!signUp)}>Log in!</a> </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Gate;