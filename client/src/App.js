import './App.css';
import { useState, createContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Gate from './components/Gate';
import Editor from './components/Editor';

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
            <Route path="/editor" component={Editor}/>
            <Route path="/gate" component={Gate}/>
            <Route path="/" component={Dashboard}/>
          </Switch>
        </div>
      </LoginContext.Provider>
  );
}

export default App;

// NOTES
// search games dropdown (third from the top). 
//FORGET THIS: Should connect to the api ONLY IF there is text in this box BECAUSE GIANTBOMB API IS GOOD.
// https://react.semantic-ui.com/modules/dropdown/#types-search-selection

// API links
//giantbomb api key= api_key=96b1a2f459df7597812987b460af056962057bd6

  //for search:
  //https://www.giantbomb.com/api/search/?api_key=96b1a2f459df7597812987b460af056962057bd6&format=json&field_list=,id,guid,name&resources=game&query={QUERY HERE}

  //for boxart:
  //https://www.giantbomb.com/api/images/{guid}/?filter=image_tag:Box%20art&api_key=96b1a2f459df7597812987b460af056962057bd6&format=json&field_list=original_url
  //https://stackoverflow.com/questions/9994493/scale-image-to-fit-a-bounding-box