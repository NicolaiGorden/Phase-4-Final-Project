import React, { useState, useContext, useEffect } from 'react'
import { useHistory  } from 'react-router-dom/cjs/react-router-dom.min'
import { LoginContext } from '../App'

function Gate() {
    const [user, setUser] = useContext(LoginContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errorData, setErrorData] = useState([])
    const [signUp, setSignUp] = useState(false)
    const [confirmMessage, setConfirmMessage] = useState(false)
    const history = useHistory()

    useEffect(() => {
        setErrorData([])
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')
        setConfirmMessage(false)
    }, [signUp])

    function onLogin(user) {
        setUser(user)
        history.push("/")
    }

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
                res.json().then(
                    setConfirmMessage(true),
                    setTimeout(() => {
                        setSignUp(false)
                    }, 2000)
                )
            } else {
                res.json().then( (err) => {setErrorData(err.errors)} )
            }
        }) 
    }

    function onLoginSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                username,
                password
            }),
        })
        .then((res) => {
            if(res.ok){
                res.json().then((user) => onLogin(user))
            } else {
                res.json().then((err) => {
                    setErrorData([err.error.login])
                })
            }
        })
    }
// TEMP
    function handleLogout(e) {
        e.preventDefault()
        fetch("/logout", {
            method: "DELETE",
        })
    }
// TEMP 

    return (
        <div class="login-wrapper">
            {/* TEMP */}
            <button onClick={handleLogout}>log out</button>
            {/* TEMP */}
            <div class="login">
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
            {errorData.map(e => {
                if (e === "Password confirmation doesn't match Password") {
                    return <h3 class="error-message">Passwords don't match!</h3>
                } else {
                    return <h3 class="error-message">{e}</h3>
                }
            })}
            {confirmMessage
                ? <h3 class="confirm-message">Account made! Redirecting to log in.</h3>
                : <h3></h3>
            }
        </div>
    )
}

export default Gate;