import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import SuccessPage from "./components/SuccessPage.jsx";
import RegistrationPage from "./components/RegistrationPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import "./App.css";
import "normalize.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/success" exact component={SuccessPage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/registration" exact component={RegistrationPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
