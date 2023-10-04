import React, { useState, useContext } from 'react'
import { LoginContext } from '../App'

function Gate() {
    const [user, setUser] = useContext(LoginContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

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
                    res.json().then( err => setErrors(err.errors) )
                }
            })
            console.log('signed up!')
        }
    }

    
    return (
        <form onSubmit={useGateSubmit}>

            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" name="Login">Log In</button>
            <button type="submit" name="Sign Up">Sign Up</button>

        </form>
    )
}

export default Gate;