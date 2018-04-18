import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AllUsersScreen from './AllUsersScreen';
import ProfileScreen from './ProfileScreen';
import Homepage from './Homepage';
import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

let TopLevel = () => 
 <Router>
    <div>
        <nav id="nav">
            <NavLink activeClassName="selected" to="/">*Home*</NavLink>
            <NavLink activeClassName="selected" to="/users">*All Users*</NavLink>
            <NavLink activeClassName="selected" to="/users/Illia">*User [Illia] Profile*</NavLink>
        </nav>
        <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/users" exact component={AllUsersScreen} />
        <Route path="/users/:id" exact component={ProfileScreen} />
        <Route component={NoMatch} />
        </Switch>
    </div>
</Router>

const NoMatch = ({ location }) => (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );

ReactDOM.render(<TopLevel />, document.getElementById('root'));
