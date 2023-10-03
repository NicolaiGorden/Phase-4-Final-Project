import React, { useState } from 'react'
import { onGateSubmit } from '../hooks/onGateSubmit'

function Gate() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    return (
        <form onSubmit={onGateSubmit}>

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