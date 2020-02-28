import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import User from "./components/user";
import UserInfo from "./components/userinfo";

function App() {
  return (
    <Router>
      <Fragment>
        <div className=" m-3" >
          <Link className="btn border-dark shadow"  to="/">
            User List
          </Link>
        </div>
        <Switch>
          {/* home route with component that shows a preview list of all objects from a specific endpoint */}
          <Route exact path="/" component={User} />
          {/* show a component specialized in showing all the information for that object's id */}
          <Route exact path="/:id/details" component={UserInfo} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
