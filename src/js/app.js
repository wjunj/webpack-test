/**
 * Created by wjunj on 16/10/11.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory ,Link} from 'react-router';

import css from '../css/main.css'
import wait from './wait.js'
import detail from './wait.js'

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={wait}/>
        <Route path="/detail" component={detail}/>
    </Router>
);


ReactDOM.render(routes, document.getElementById('main'));