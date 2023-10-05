import React, { useState, useContext } from 'react'
import { LoginContext } from '../App'

function Gate() {
    const [user, setUser] = useContext(LoginContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorData, setErrorData] = useState([])

    function useGateSubmit(e) {
        e.preventDefault()
        const userCreds = {
            username,
            password
        }
    
        if (e.nativeEvent.submitter.name === 'Login') {
            console.log('logging in!')
        } else if (e.nativeEvent.submitter.name === 'Sign Up') {
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
            console.log('signed up!')
        }
    }

    
    return (
        <div class="login-wrapper">
            <div class="login">
                <h3>{errorData}</h3>
                <form onSubmit={useGateSubmit}>
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
                    <button class="login-button" type="submit" name="Sign Up">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Gate;