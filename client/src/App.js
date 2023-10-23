import './App.css';
import { useState, createContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Gate from './components/Gate';
import GamePage from './components/GamePage';
import ReviewPage from './components/ReviewPage';

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
            <Route path="/updatereview/:redirectReviewId" component={ReviewPage}/>
            <Route path="/newreview/:redirectGameId" component={ReviewPage}/>
            <Route path="/newreview" component={ReviewPage}/>
            <Route path="/game/:gameId" component={GamePage}/>
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
// https://react.semantic-ui.com/modules/dropdown/#types-search-selection

// API links
//giantbomb api key= api_key=96b1a2f459df7597812987b460af056962057bd6

  //for search:
  //https://www.giantbomb.com/api/search/?api_key=96b1a2f459df7597812987b460af056962057bd6&format=json&field_list=guid,name&resources=game&query={QUERY HERE}

  //when clicked:
  //https://www.giantbomb.com/api/game/{GUID}/?api_key=96b1a2f459df7597812987b460af056962057bd6&format=json&field_list=image,guid,name
  //https://stackoverflow.com/questions/9994493/scale-image-to-fit-a-bounding-box

  //https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
  //above link is for if 'original_url' key is nonexistant.
  //when populating state with the cover image of the game,
  //check if original_url exists. if not, return a default
  //'no art :(' image.