import React, { useContext } from 'react'
import { Route, Redirect }  from "react-router-dom";
import { LoginContext } from '../App';

function PrivateRoute ({ children, ...rest}) {

    const [user, setUser] = useContext(LoginContext)

    return (
        <Route {...rest} render={() => {
            return !user
                ? <Redirect to="/gate"/>
                : children
        }}/>
    )
}

export default PrivateRoute;