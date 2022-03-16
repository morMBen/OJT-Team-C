import Signup from "./sign/Sign";
import Login from "./login/Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TempLoginPage from "./TempLoginPage/TempLoginPage";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/sign" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>

      {/* <TempLoginPage /> */}
    </>
  );
}

export default App;
