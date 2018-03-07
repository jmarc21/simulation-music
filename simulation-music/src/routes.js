import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import PlaylistList from './components/PlaylistList';
import Login from './components/Login';
import Details from './components/Details';


const User = ({ match }) => {
    return (
        <div>
            <h1>Hello James!</h1>
            <Link to='/home'><div>go to home</div></Link>
        </div>
    )
}


export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/user" component={User} />
        <Route path='/home' component={Home} />
        <Route path='/playlistlist' component={PlaylistList} />
        <Route path='/details' render={Details} />
    </Switch>
)