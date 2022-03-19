import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TempLoginPage from "./TempLoginPage/TempLoginPage";

// /
// /login
// /sign
// /user/:id

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

            <Route path="*">
              <h2>There is no match for your url - are you lost?</h2>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
