import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PlaylistList from './components/PlaylistList';
import Login from './components/Login';
import Details from './components/Details';


export default (
    <Switch>
        <Route exact path = '/' component={Login} />
        <Route path = '/home' component={Home}/>
        <Route path = '/playlistlist' component={PlaylistList} />
        <Route path = '/details' render={Details} />
    </Switch>
)