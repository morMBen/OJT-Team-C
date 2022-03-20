import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SpecialRoute from "./specialRoute/SpecialRoute";

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
                <h2>Todos Page</h2>
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
                <h2>Login Page</h2>
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

/*
            <Route exact path="/">
              <h2>Home Page</h2>
            </Route>

            <Route path="/login">
              <h2>Login Page</h2>
            </Route>

            <Route path="/sign-up">
              <h2>Sign-Up Page</h2>
            </Route>

            <Route path="/user/:id">
              <h2>{`Welcome user ${"test"}`}</h2>
            </Route>
*/
