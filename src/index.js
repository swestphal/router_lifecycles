import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
//import { HashRouter, Route, Link } from 'react-router-dom';

// components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import LifeCycle from './components/life_cycle';
import Conditional from './components/conditional';



const App = () => {
    return (
       <BrowserRouter>
            <div>
                <header>
                  <NavLink to='/'>Home</NavLink><br/>
                  <NavLink to='/posts'
                  activeClassName="active">Posts</NavLink><br/>
                  <NavLink to='/profile'>Profile</NavLink><br/>
                  {/* <Link to={{
                      pathname:'/profile',
                      hash:'#francis',
                      search:'?profile="true"'
                  }}>Profile</Link><br/> */}
                  <NavLink to="/lc" >LifeCycle</NavLink>
                  <NavLink to="/cond" >Conditional</NavLink>
                </header>
                <Switch> 
                    <Route path='/posts/:id/:name' component={PostItem}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/posts'  component={Posts}/>
                    <Route path='/lc'   component={LifeCycle}/>
                    <Route path='/cond'   component={Conditional}/>
                    <Route path='/'  exact component={Home}/>
                    <Route render={()=><h3>oops 404</h3>}/>
                </Switch>
            </div>
       </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));