/* Created by wjunj on 16/12/19.
*/

import React,{Component} from 'react';
import { Router, Route, browserHistory ,Link,getComponent} from 'react-router';

const routesConfig ={
    WaitManage : (nextState, cb) => {
        require.ensure([], require => {
            cb(null, require('./wait'))
        },'wait')
    },
    HelloManage : (nextState, cb) => {
        require.ensure([], require => {
            cb(null, require('./hello'))
        },'hello')
    }
}


const routes = (
    <Router history={browserHistory}>
        <Route path="/" getComponent={routesConfig.WaitManage}/>
        <Route path="/hello" getComponent={routesConfig.HelloManage}/>
    </Router>
);

export default routes;
