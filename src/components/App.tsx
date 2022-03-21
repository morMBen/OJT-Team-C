import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SpecialRoute from "./specialRoute/SpecialRoute";
import TempLoginPage from "./TempLoginPage/TempLoginPage";

import { TodoPage } from "./TodoPage/TodoPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>Todo's App - Team C</h1>
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/">
              <SpecialRoute>
                <Redirect to="/login" />
                <TodoPage />
              </SpecialRoute>
            </Route>

            <Route exact path="/user">
              <SpecialRoute>
                <Redirect to="/login" />
                <h2>User Info Page</h2>
              </SpecialRoute>
            </Route>

            <Route exact path="/login">
              <SpecialRoute>
                <TempLoginPage />
                <Redirect to="/" />
              </SpecialRoute>
            </Route>

            <Route exact path="/sign-up">
              <SpecialRoute>
                <h2>Sign-up Page</h2>
                <Redirect to="/" />
              </SpecialRoute>
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;