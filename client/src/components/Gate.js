import React, { useState } from 'react'

function Gate() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    function onSubmit(e) {
        e.preventDefault()
        if (e.nativeEvent.submitter.name === 'Login') {
            console.log('logging in!')
        } else if (e.nativeEvent.submitter.name === 'Sign Up') {
            console.log('signed up!')
        }
    }

    return (
        <form onSubmit={onSubmit}>

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