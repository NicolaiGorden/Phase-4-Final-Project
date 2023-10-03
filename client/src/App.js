import './App.css';
import { useState, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Gate from './components/Gate';

export const LoginContext = createContext();

function App() {
  const [user, setUser] = useState('');

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