import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./common/Header";
import ScrollButton from "./common/ScrollButton/scrollButton";
import ErrorPage from "./views/ErrorPage";
import FeedPage from "./views/FeedPage";
import UserProfilePage from "./views/UserProfilePage";

function App() {
  return (
    <Router>
      <Header />
      <ScrollButton />

      <Switch>
        
        <Route exact path="/">
          <FeedPage />
        </Route>
       
        <Route exact path="/user/:username">
          <UserProfilePage />
        </Route>

        <Route path="*">
          <ErrorPage />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
