import './App.css';
import { useState, createContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Gate from './components/Gate';

export const LoginContext = createContext();

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, [])

  return (
      <LoginContext.Provider value={[user, setUser]}>
        <div className="App">
          <Switch>
            <Route path="/gate" component={Gate}/>
            <PrivateRoute path="/">
              <Dashboard/>
            </PrivateRoute>
          </Switch>
        </div>
      </LoginContext.Provider>
  );
}

export default App;