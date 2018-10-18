import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, NavLink, Redirect } from 'react-router-dom'; //HashRouter //MemoryRouter

// Components
import Home from './components/home';
import Posts from './components/posts';
import PostItem from './components/post_item';
import Profile from './components/profile';
import Life from './components/life_cycles';
import Conditional from './components/conditional';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/Home" activeStyle={{color:'red'}}>Home</NavLink><br/>
          <NavLink to="/Profile" activeClassName="selected">Profile</NavLink><br/>
          <NavLink to="/Posts" activeStyle={{color:'red'}}>Posts</NavLink><br/>
          <NavLink to="/Life" activeStyle={{color:'red'}}>Life Cycles</NavLink><br/>
          <NavLink to="/Conditional" activeStyle={{color:'red'}}>Conditional</NavLink><br/>
          <hr/>
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/posts" exact component={Posts}/>
          <Route path="/posts/:id" component={PostItem}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/life" component={Life}/>
          <Route path="/conditional" component={Conditional}/>
          <Route render={() => <h3>oops 404</h3>} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
