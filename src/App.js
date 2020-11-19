import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginContainer from "./containers/LoginContainer";
import PlanetsContainer from "./containers/PlanetsContainer";
import SearchContainer from "./containers/SearchContainer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact component={LoginContainer} path="/" />
          <Route exact component={LoginContainer} path="/login" />
          {/* <ProtectedRoute path="/landing"><PlanetsContainer /></ProtectedRoute> */}
          <Route component={SearchContainer} path="/landing" />

        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
