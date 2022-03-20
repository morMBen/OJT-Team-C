// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from 'react-router-dom';
// import SpecialRoute from './specialRoute/SpecialRoute';

// import TempLoginPage from './TempLoginPage/TempLoginPage';
// import TempPage from './TempLoginPage/TempPage';

import { TodoPage } from "./TodoPage/TodoPage";

function App() {
  return (
    <>
      <TodoPage />
      {/* <Router>
        <Switch>
          <Route exact path='/login'>
            <SpecialRoute>
              <TempLoginPage />
              <Redirect to='/' />
            </SpecialRoute>
          </Route>

          <Route exact path='/'>
            <SpecialRoute>
              <Redirect to='/login' />
              <TempPage pageName='Home' />
            </SpecialRoute>
          </Route>

          <Route exact path='/todo'>
            <SpecialRoute>
              <Redirect to='/login' />
              <TempPage pageName='Todo' />
            </SpecialRoute>
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
