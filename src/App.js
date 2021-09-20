import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
