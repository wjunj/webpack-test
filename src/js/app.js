/**
 * Created by wjunj on 16/10/11.
 */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';


import { Router, Route, browserHistory ,Link,getComponent} from 'react-router';

import css from '../css/main.css'
import wait from './wait.js'

const SpuLibManage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./hello'))
    },'hello')
}

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={wait}/>
        <Route path="/hello" getComponent={SpuLibManage}/>
    </Router>
);


ReactDOM.render(routes, document.getElementById('main'));