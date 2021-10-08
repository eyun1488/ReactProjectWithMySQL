import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
// import DeleteUser from "./components/DeleteUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/CreateUser" exact component={CreateUser}></Route>
            <Route path="/UpdateUser/:id" exact component={UpdateUser}></Route>
            {/* <Route path="/DeleteUser/:id" exact component={DeleteUser}></Route> */}
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
