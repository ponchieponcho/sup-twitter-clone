import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AllUsersScreen from './AllUsersScreen';
import ProfileScreen from './ProfileScreen';
import Homepage from './Homepage';
import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import {actionUpdateSupList, UPDATE_SUPLIST} from './actions/sups';

let initState = {sups:[], users:[]};

let reducer = (state = initState, action) => {
  switch(action.type) {
    case UPDATE_SUPLIST:
      console.log('Firing CREATE_SUPLIST action')
      console.log(action.payload)
      let sups = action.payload;
      return {...state, sups: sups}
      
      default:
        return state;
  }
}

let store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let ScreenDumb = ({sups, dispatch}) => {
  return (
      <Router>
        <div>
            <nav id="nav">
            <div className="dropdown">
              <button className="dropbtn">MENU</button>
              <div className="dropdown-content">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Sups</NavLink>
                </div>
              </div>
            </nav>
            <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/users" exact component={AllUsersScreen} />
            <Route path="/users/:id" exact component={ProfileScreen} />
            <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
   )}

// store.subscribe(() => {
//   console.log('GETTING STATE:')
//   console.log(store.getState());
// });

let NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

let mapStateToProps = (state) => {
  return {sups: state.sups};
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch};
}

let Screen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenDumb);


let TopLevel = <Provider store={store}><Screen /></Provider>

ReactDOM.render(TopLevel, document.getElementById('root'));

