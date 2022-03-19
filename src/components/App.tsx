import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SpecialRoute from "./specialRoute/SpecialRoute";

import TempLoginPage from "./login/Login";
import TempPage from "./login/TempPage";
import MainBar from "./mainBar/MainBar";

function App() {
  return (
    <>
      <Router>
        <MainBar />
        <Switch>
          <Route exact path="/login">
            <SpecialRoute>
              <TempLoginPage />
              <Redirect to="/" />
            </SpecialRoute>
          </Route>

          <Route exact path="/">
            <SpecialRoute>
              <Redirect to="/login" />
              <TempPage pageName="Home" />
            </SpecialRoute>
          </Route>

          <Route exact path="/todo">
            <SpecialRoute>
              <Redirect to="/login" />
              <TempPage pageName="Todo" />
            </SpecialRoute>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
