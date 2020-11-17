import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginContainer from "./containers/LoginContainer";
import PlanetsContainer from "./containers/PlanetsContainer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact component={LoginContainer} path="/" />
          <Route component={PlanetsContainer} path="/landing" />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
