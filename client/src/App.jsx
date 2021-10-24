import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import CreateUser from "./components/User/CreateUser";
import UpdateUser from "./components/User/UpdateUser";
// import DeleteUser from "./components/DeleteUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/CreateUser" exact component={CreateUser}></Route>
            <Route path="/UpdateUser/:id" exact component={UpdateUser}></Route>
            {/* <Route path="/DeleteUser/:id" exact component={DeleteUser}></Route> */}
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
